/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import { AppState } from './app.service';

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
    <div style="display: flex; min-height: 100vh; flex-direction: column;">
        <div style="flex: 1;">
            <router-outlet></router-outlet>
        </div>
        <footer-bar></footer-bar>
    </div>
    <button mat-fab *ngIf="show" (click)="returnTop()" style="position: fixed; bottom: 10px; right: 10px;">
        <mat-icon>keyboard_arrow_up</mat-icon>
    </button>
  `,
})
export class AppComponent implements OnInit {
    public show: boolean = false;

    constructor(
        public appState: AppState,
        public titleService: Title,
    ) {
    }

    public ngOnInit() {
        console.log('Initial App State', this.appState.state);
        this.titleService.setTitle('Eltrun - the E-Business Research Center')
    }

    @HostListener('document:scroll')
    public onScroll() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        this.show = scrollPosition > 200;
    }

    public returnTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}

/**
* Please review the https://github.com/AngularClass/angular2-examples/ repo for
* more angular app examples that you may copy/paste
* (The examples may not be updated as quickly. Please open an issue on github for us to update it)
* For help or questions please contact us at @AngularClass on twitter
* or our chat on Slack at https://AngularClass.com/slack-join
*/
