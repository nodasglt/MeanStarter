import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: ['../research.component.scss'],
    templateUrl: 'iml.component.html'
})
export class ImlComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('[IML] INTELLIGENT MEDIA LAB');
        });
    }
}
