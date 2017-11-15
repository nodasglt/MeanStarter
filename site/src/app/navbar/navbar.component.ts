import {
    Component,
    ViewChild,
    HostListener,
    ElementRef,
    AfterViewInit,
} from '@angular/core';

@Component({
    selector: 'navbar',
    styleUrls: [ 'navbar.component.scss' ],
    templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements AfterViewInit {
    public isSticky: boolean;
    public window = window;
    public activeLinkIndex: number;
    public console = console;

    ngAfterViewInit() {
        setTimeout(() => {
            this.isSticky = !(this.window.innerWidth < 960);
        });
    }

    @ViewChild('Header') private header: ElementRef;

    @HostListener('document:scroll')
    public onScroll() {
        if (this.window.innerWidth < 960) {
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            console.log("current: " + scrollPosition + " and header height is: " + this.header.nativeElement.offsetHeight);
            this.isSticky = (scrollPosition > this.header.nativeElement.offsetHeight);
        }
    }
}
