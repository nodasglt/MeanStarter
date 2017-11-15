import {
  Component,
} from '@angular/core';

@Component({
  selector: 'research',
  styleUrls: [ '../landing-page/landing-page.component.scss', 'research.component.scss' ],
  templateUrl: 'research.component.html'
})
export class ResearchComponent {
    panelOpenState: boolean = false;
}
