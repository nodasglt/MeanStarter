import {
  Component,
} from '@angular/core';

@Component({
  selector: 'research',
  styleUrls: [ '../landing-page/landing-page.component.scss' ],
  template: `
    <section class="cd-section" style="max-width: 1400px;">
        <router-outlet></router-outlet>
    </section>
    `,
})
export class InnovationComponent {
}
