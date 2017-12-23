import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../innovation.component.scss' ],
    templateUrl: 'yes.component.html'
})
export class YesComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('YOUTH ENTREPRENEURSHIP SUMMER SCHOOL (YES)');
        });
    }
}
