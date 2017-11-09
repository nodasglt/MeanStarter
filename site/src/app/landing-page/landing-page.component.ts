import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'landing-page',
    styleUrls: [ 'landing-page.component.scss' ],
    templateUrl: 'landing-page.component.html',
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

}
