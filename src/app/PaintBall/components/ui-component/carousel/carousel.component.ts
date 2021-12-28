import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import SwiperCore, { Zoom, Navigation, Autoplay, EffectCoverflow, Pagination, Scrollbar } from "swiper";
import { Carousel } from './carousel.class';
SwiperCore.use( [Zoom, Navigation, Autoplay, EffectCoverflow, Pagination] );

// install Swiper modules for mobile
SwiperCore.use( [Scrollbar] );
@Component( {
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
} )
export class CarouselComponent implements OnInit {
  @Input() imgUrl: Carousel[];
  isMobile: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }
}
