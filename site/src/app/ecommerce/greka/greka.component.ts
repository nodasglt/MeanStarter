import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../ecommerce.component.scss'],
    templateUrl: 'greka.component.html'
})
export class GrekaComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('GRECA TRUSTMARK');
        });
    }
}
