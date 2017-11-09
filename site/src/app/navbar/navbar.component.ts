import {
    Component,
    Inject,
    HostListener,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import {
    Router,
    NavigationEnd,
    ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'navbar',
    styleUrls: [ 'navbar.component.scss' ],
    templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements AfterViewInit, OnDestroy {
    public scrollPosition: number = 0;
    public isHidden: boolean = false;
    public isFixed: boolean = false;
    public slideIn: boolean = false;
    public isOpen: boolean = false;
    public isPrimaryVisible: boolean = false;
    public secondaryNavTopPosition: number;
    //public taglineOffesetTop: number;

    private fragment: string;

    private toClean: Subscription[];

    @ViewChild('SecondaryNav') private secondaryNav: ElementRef;
    //@ViewChild('IntroTagline') private introTagline: ElementRef;

    @ViewChildren('placeholder') private placeholders: QueryList<ElementRef>;

    private skipUpdate: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                if (this.router.url !== '/')
                {
                    window.scroll({
                        top: this.secondaryNavTopPosition + 1,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    ngAfterViewInit() {
        this.secondaryNavTopPosition = this.secondaryNav.nativeElement.offsetTop;
        //this.taglineOffesetTop = this.introTagline.nativeElement.offsetTop
        //                       + this.introTagline.nativeElement.offsetHeight
        //                       + parseInt(window.getComputedStyle(this.introTagline.nativeElement).paddingTop.replace('px', ''));
    }

    ngOnDestroy() {
        this.toClean.forEach(sub => {
            sub.unsubscribe();
        });
    }

    @HostListener('document:scroll')
    public onScroll() {
        this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    //    this.isHidden = this.scrollPosition > this.taglineOffesetTop;
        if (this.scrollPosition > this.secondaryNavTopPosition) {
            this.isFixed = true;
            setTimeout(() => {
                this.slideIn = true;
            }, 50);
        }
        else {
            this.isFixed = false;
            setTimeout(() => {
                this.slideIn = false;
            }, 50);
        }
    }

    //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
	openSecondaryNavTrigger() {
		this.isOpen = !this.isOpen;
	};

    //on mobile - open/close primary navigation clicking/tapping the menu icon
	openPrimaryNav() {
    	this.isPrimaryVisible = !this.isPrimaryVisible;
	};
}
