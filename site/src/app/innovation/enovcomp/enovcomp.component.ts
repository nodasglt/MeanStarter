import {
    Component,
} from '@angular/core';

import { BannerService } from '../../banner';

@Component({
    styleUrls: [ '../innovation.component.scss' ],
    templateUrl: 'enovcomp.component.html'
})
export class EnovCompComponent {
    constructor (
    private bannerService: BannerService,
) {
    setTimeout(() => {
        this.bannerService.setText('ENNOVATION COMPETITION');
    });
}
}
