import {
    Component,
    Inject,
    HostListener,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
    AfterViewInit,
    OnInit
} from '@angular/core';

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
export class NavBarComponent implements AfterViewInit, OnInit {
    public scrollPosition: number = 0;
    public isHidden: boolean = false;
    public isFixed: boolean = false;
    public slideIn: boolean = false;
    public isOpen: boolean = false;
    public isPrimaryVisible: boolean = false;
    public secondaryNavTopPosition: number;
    public taglineOffesetTop: number;

    private fragment: string;

    @ViewChild('SecondaryNav') private secondaryNav: ElementRef;
    @ViewChild('IntroTagline') private introTagline: ElementRef;

    @ViewChildren('placeholder') private placeholders: QueryList<ElementRef>;

    private skipUpdate: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(element);
                        this.fragment = tree.fragment;
                        this.skipUpdate = true;
                    }
                }
            }
        });
    }

    ngOnInit() {
        //this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    }

    ngAfterViewInit() {
        this.secondaryNavTopPosition = this.secondaryNav.nativeElement.offsetTop;
        this.taglineOffesetTop = this.introTagline.nativeElement.offsetTop
                               + this.introTagline.nativeElement.offsetHeight
                               + parseInt(window.getComputedStyle(this.introTagline.nativeElement).paddingTop.replace('px', ''));
    }

    @HostListener('document:scroll')
    public onScroll() {
        this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        this.isHidden = this.scrollPosition > this.taglineOffesetTop;
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

        this.updateSecondaryNavigation();
    }

    //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
	openSecondaryNavTrigger() {
		this.isOpen = !this.isOpen;
	};

    //on mobile - open/close primary navigation clicking/tapping the menu icon
	openPrimaryNav() {
    	this.isPrimaryVisible = !this.isPrimaryVisible;
	};

    public height: number;

    updateSecondaryNavigation() {
        if (this.skipUpdate) {
            this.skipUpdate = false;
            return;
        }
        const secondaryNav = this.secondaryNav.nativeElement;
        this.placeholders
            .map(item => item.nativeElement)
            .forEach(item => {
                const height = item.offsetHeight
                           + parseInt(window.getComputedStyle(item).paddingTop.replace('px', ''))
                           + parseInt(window.getComputedStyle(item).paddingBottom.replace('px', ''));
                this.height = height;
                if ( ( item.offsetTop - secondaryNav.offsetHeight <= this.scrollPosition )
                  && ( item.offsetTop +  height - secondaryNav.offsetHeight > this.scrollPosition ) ) {
                    this.fragment = item.id;
                }
            });
	}

    isActive(id: string) {
        console.log(id + " == " + this.fragment);
        return id == this.fragment;
    }

}
