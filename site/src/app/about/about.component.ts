import {
  Component,
} from '@angular/core';

import { BannerService } from '../banner';

@Component({
  selector: 'about',
  styleUrls: ['../landing-page/landing-page.component.scss'],
  templateUrl: 'about.component.html'
})
export class AboutComponent {
    constructor (
        private bannerService: BannerService,
    ) {
        setTimeout(() => {
            this.bannerService.setText('About Us');
        });
    }
}
