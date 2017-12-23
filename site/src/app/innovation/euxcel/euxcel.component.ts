import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../innovation.component.scss' ],
    templateUrl: 'euxcel.component.html'
})
export class EuXcelComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('EU-XCEL VIRTUAL ACCELERATOR');
        });
    }
}
