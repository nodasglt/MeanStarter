import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../ecommerce.component.scss'],
    templateUrl: 'training.component.html'
})
export class TrainingComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('TRAINING');
        });
    }
}
