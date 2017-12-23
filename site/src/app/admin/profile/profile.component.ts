import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';
import {
    OnInit,
    Component
} from '@angular/core';
import {
    AuthService
} from '../../core';
import {
    Observable
} from 'rxjs/Rx';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
    ) {
    }

    token: string = '';
    test: Observable<string>;

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            const code = params['code'];
            if (code) {
                this.authService.loginGoogle(code, false).subscribe(_ => {
                    this.token = this.authService.getToken();
                    this.test = this.authService.test();
                })
            }
        });
    }
}
