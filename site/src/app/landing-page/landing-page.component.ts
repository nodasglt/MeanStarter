import {
    Component,
    OnInit,
} from '@angular/core';

import {
    trigger,
    transition,
    group,
    query,
    style,
    animate,
} from '@angular/animations';

@Component({
    selector: 'landing-page',
    styleUrls: [ 'landing-page.component.scss' ],
    templateUrl: 'landing-page.component.html',
    animations: [
        trigger('routeAnimation', [
            transition('* => *', [
                style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
                query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
                group([
                    query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)' }))], { optional: true }),
                    query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%)' }))], { optional: true })
                ])
            ])
        ])
    ],
})
export class LandingPageComponent implements OnInit {
    myParams: object = {};
    myStyle: object = {};

    ngOnInit() {
        this.myStyle = {
            'height': '100%'
        };

        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }

    getDepth(outlet) {
        return outlet.activatedRouteData['depth'];
    }
}
