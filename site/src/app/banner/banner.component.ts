import {
    Component,
} from '@angular/core';

import { BannerService } from './banner.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'banner',
    styleUrls: [ 'banner.component.scss' ],
    templateUrl: 'banner.component.html',
})
export class BannerComponent {

    public text: Observable<string> = this.bannerService.getText();

    constructor(
        private bannerService: BannerService,
    ) {
    }
}
