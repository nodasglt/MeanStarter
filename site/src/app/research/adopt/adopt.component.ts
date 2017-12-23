import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../research.component.scss'],
    templateUrl: 'adopt.component.html'
})
export class AdoptComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('[ADOPT] ALGORITHMS AND DISCRETE OPTIMIZATION');
        });
    }
}
