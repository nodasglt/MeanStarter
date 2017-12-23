import {
  Component,
} from '@angular/core';

import { BannerService } from '../banner';

@Component({
  selector: 'publications',
  styleUrls: ['../landing-page/landing-page.component.scss', 'publications.component.scss'],
  templateUrl: 'publications.component.html'
})
export class PublicationsComponent {

    constructor(
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('Eltrun Publications');
        });
    }
}
