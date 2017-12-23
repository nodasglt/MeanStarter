import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../innovation.component.scss' ],
    templateUrl: 'tee.component.html'
})
export class TeeComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('PROTOTYPE BY TEE');
        });
    }
}
