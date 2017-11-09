/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import { trigger, transition, group, query, style, animate } from '@angular/animations';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <landing-page></landing-page>
    <main class=route-container [@routeAnimation]="getDepth(myOutlet)">
        <router-outlet #myOutlet="outlet"></router-outlet>
    </main>

    <footer style="width: 100%;">
      <span style="text-align: center; background: #030d18;width: 100%;  display:block; height:50px;color=rgb(133, 31, 13);">© Copyright 1996 - 2017 | Athens University of Economics and Business</span>
    </footer>
  `,
  animations: [
      trigger('routeAnimation', [
          transition('* => *', [
              style({ height: '!' }),
              query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
              query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
              group([
                  query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)' }))], { optional: true }),
                  query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0%)' }))], { optional: true })
              ])
          ])
      ])
  ]
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  getDepth(outlet) {
      return outlet.activatedRouteData['depth'];
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
