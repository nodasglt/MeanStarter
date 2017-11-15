import {
    Inject,
    Injectable
} from '@angular/core';

import {
    Router
} from '@angular/router';

import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';

import {
    Observable
} from 'rxjs/Rx';

import {
    LOCAL_STORAGE,
    SESSION_STORAGE,
    StorageService
} from 'angular-webstorage-service';

interface TokenResponse {
    token: string;
}

export interface Credentials {
    username: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router,
        @Inject(LOCAL_STORAGE) private localStorage: StorageService,
        @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
    ) {}

    public routes = { local: 'api/auth/local', google: ' api/auth/google/callback' };

    test() : Observable<string> {
        return this.http.get('api/test');
    }

    getToken(): string {
        return this.localStorage.get('authenticationToken') || this.sessionStorage.get('authenticationToken');
    }

    loginGoogle(code: string, rememberMe: boolean): Observable<void> {
        const params = new HttpParams().append('code', code).append('rememberMe', rememberMe + '');
        return this.http.get<TokenResponse>(this.routes.google, { params })
                        .map(this.handleResponce(rememberMe)).catch(err => {
                            console.log(err);
                            return Observable.empty();
                        });
    }

    loginLocal(credentials: Credentials, rememberMe: boolean): Observable<void> {

        const { username, password } = credentials;

        return this.http.post<TokenResponse>(this.routes.local, { username, password, rememberMe })
                        .map(this.handleResponce(rememberMe));
    }

    handleResponce(rememberMe: boolean) {
        return (response: TokenResponse): void => {
            console.log(response);
            if (rememberMe) {
                this.localStorage.set('authenticationToken', response.token);
            } else {
                this.sessionStorage.set('authenticationToken', response.token);
            }
        }
    }

    logout(): Observable<{}> {
        return new Observable((observer) => {
            this.localStorage.remove('authenticationToken');
            this.sessionStorage.remove('authenticationToken');
            this.router.navigate(['/']);
            observer.complete();
        });
    }
}
