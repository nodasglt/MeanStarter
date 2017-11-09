/**
* Module dependencies.
*/
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const multer = require('multer');

var jwt = require('jsonwebtoken');

const upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
* Load environment variables from .env file, where API keys and passwords are configured.
*/
dotenv.load({ path: '.env' });

/**
* Controllers (route handlers).
*/
const userController = require('./controllers/user');
const apiController = require('./controllers/api');

/**
* API keys and Passport configuration.
*/
const passportConfig = require('./config/passport');

/**
* Create Express server.
*/
const app = express();

/**
* Connect to MongoDB.
*/
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useMongoClient: true });
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

/**
* Express configuration.
*/
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());

/**
* Primary app routes.
*/
app.post('/login', userController.postLogin);
app.post('/forgot', userController.postForgot);
app.post('/reset/:token', userController.postReset);
app.post('/signup', userController.postSignup);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

/**
* API examples routes.
*/
app.get('/api', apiController.getApi);
app.get('/api/upload', apiController.getFileUpload);
app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
app.get('/api/google-maps', apiController.getGoogleMaps);

/**
* OAuth authentication routes. (Sign in)
*/
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    payload = {
        scope: 'client:outgoing?clientName=matt',
        iss: 'APP_SID',
    };
    res.statusCode = 200;
    res.json({ token: jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'foobar',
        ...payload
    }, 'secret') });
});

/**
* Error Handler.
*/
app.use(errorHandler());

/**
* Start Express server.
*/
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
