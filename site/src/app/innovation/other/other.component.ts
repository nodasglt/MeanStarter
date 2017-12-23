import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../innovation.component.scss' ],
    templateUrl: 'other.component.html'
})
export class OtherComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('OTHER SERVICES');
        });
    }
}
