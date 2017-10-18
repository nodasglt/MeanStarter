import {
  Component,
  Inject,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import {
    DOCUMENT
} from '@angular/common';

@Component({
  selector: 'navbar',
  styleUrls: [ 'navbar.component.scss' ],
  templateUrl: 'navbar.component.html',
})
export class NavBarComponent implements AfterViewInit {
    public scrollPosition: number = 0;
    public isHidden: boolean = false;
    public isFixed: boolean = false;
    public slideIn: boolean = false;
    public isOpen: boolean = false;
    public isPrimaryVisible: boolean = false;
    public secondaryNavTopPosition: number;
    public taglineOffesetTop: number;

    @ViewChild('SecondaryNav') private secondaryNav: ElementRef;
    @ViewChild('IntroTagline') private introTagline: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngAfterViewInit() {
        this.secondaryNavTopPosition = this.secondaryNav.nativeElement.offsetTop;
        this.taglineOffesetTop = this.introTagline.nativeElement.offsetTop
            + this.introTagline.nativeElement.offsetHeight
            + parseInt(window.getComputedStyle(this.introTagline.nativeElement).paddingTop.replace('px', ''));

    }

    @HostListener('document:scroll')
    public onScroll() {
        this.scrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop;
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
    }

    //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
	openSecondaryNavTrigger() {
		this.isOpen = !this.isOpen;
	};

    //on mobile - open/close primary navigation clicking/tapping the menu icon
	openPrimaryNav() {
    	this.isPrimaryVisible = !this.isPrimaryVisible;
	};

    updateSecondaryNavigation() {
		/*contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
        */
	}

}
