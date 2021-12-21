import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Zoom, Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Carousel } from './carousel.class';
SwiperCore.use( [Zoom, Navigation, Autoplay, EffectCoverflow, Pagination] );

@Component( {
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
} )
export class CarouselComponent implements OnInit {
  @Input() imgUrl: Carousel[];
  constructor() {}

  ngOnInit(): void {

  }
}
