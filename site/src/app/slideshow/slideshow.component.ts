import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'slideshow',
  styleUrls: [ 'slideshow.component.scss' ],
  templateUrl: 'slideshow.component.html'
})
export class SlideshowComponent implements AfterViewInit, OnDestroy, OnInit {
    public images = [
                'assets/img/Athens-Innovation-festival-1024x331.jpg',
                'assets/img/First-Page-Slider-2-1024x331.jpg'
            ]

    public current: number = 0;

    timerId: any = undefined;

    next() {
        this.current = (this.current + 1) % this.images.length;
    }

    prev() {
        this.current = (this.current == 0) ? this.images.length - 1 : this.current - 1;
    }

    ngAfterViewInit() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.next();
            }, 6000);
        }
    }

    ngOnDestroy() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = undefined;
        }
    }

    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;

    ngOnInit() {
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            easing: 'ease'
        }
    }

    public carouselTileLoad(evt: any) {

        const len = this.carouselTileItems.length
        if (len <= 30) {
            for (let i = len; i < len + 10; i++) {
                this.carouselTileItems.push(i);
            }
        }

    }
}
