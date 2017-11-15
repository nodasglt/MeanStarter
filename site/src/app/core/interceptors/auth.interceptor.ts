import {
    Injectable,
    Injector,
} from '@angular/core';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';

import {
    Observable
} from 'rxjs/Rx';

import {
    AuthService
} from '../';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor (
        private injector: Injector,
    ) {
    }

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.injector.get(AuthService);
        const token = authService.getToken();

        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
        }

        return next .handle(req)
                    .catch((error: any) => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 401
                                && (error.url !== authService.routes.local
                                    || error.url !== authService.routes.google)) {
                                return authService.logout();
                            }
                            return Observable.throw(error);
                        } else {
                            return Observable.throw(error);
                        }
                    })
    }
}
