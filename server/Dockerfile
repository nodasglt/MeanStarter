FROM node:8-slim

COPY . /starter
COPY package.json /starter/package.json
COPY .env /starter/.env

WORKDIR /starter

ENV NODE_ENV production
# ENV NODE_ENV development
RUN npm install --production
# RUN npm install -g nodemon

# ENTRYPOINT ["nodemon","app.js"]
ENTRYPOINT ["node","app.js"]

EXPOSE 3000
