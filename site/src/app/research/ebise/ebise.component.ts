import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../research.component.scss'],
    templateUrl: 'ebise.component.html'
})
export class EbiseComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('[EBISE] E-BUSINESS INNOVATION, STRATEGY AND ENTREPRENEURSHIP');
        });
    }
}
