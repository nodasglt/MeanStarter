import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../research.component.scss'],
    templateUrl: 'imes.component.html'
})
export class ImesComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('[IMES] INTERACTIVE MARKETING AND ELECTRONIC SERVICES');
        });
    }
}
