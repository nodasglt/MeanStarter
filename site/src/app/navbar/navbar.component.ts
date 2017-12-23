import {
    Component,
    ViewChild,
    HostListener,
    ElementRef,
    AfterViewInit,
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    styleUrls: [ 'navbar.component.scss' ],
    templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements AfterViewInit {
    public isSticky: boolean = true;
    public window = window;
    public activeLinkIndex: number;
    public console = console;

    constructor (
        public router: Router,
    ) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.isSticky = false;
        }, 500);
    }

    @ViewChild('Header') private header: ElementRef;

    @HostListener('document:scroll')
    public onScroll() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        //-onsole.log("current: " + scrollPosition + " and header height is: " + this.header.nativeElement.offsetHeight);
        this.isSticky = (scrollPosition > this.header.nativeElement.offsetHeight);
    }
}
