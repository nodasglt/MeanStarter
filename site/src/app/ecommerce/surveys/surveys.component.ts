import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../ecommerce.component.scss'],
    templateUrl: 'surveys.component.html'
})
export class SurveysComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('SURVEYS / STUDIES');
        });
    }
}
