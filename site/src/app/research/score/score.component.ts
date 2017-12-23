import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../research.component.scss' ],
    templateUrl: 'score.component.html'
})
export class ScoreComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('[SCORE] SUPPLY & DEMAND MANAGEMENT. COLLABORATION AND ELECTRONIC SERVICES');
        });
    }
}
