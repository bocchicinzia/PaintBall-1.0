import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { TestModel } from './testModel.model';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
} )
export class HomePagesComponent implements OnInit {
  cardDescription: TestModel;
  imgUrl: Carousel[];

  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAnyContent( 'card' ).subscribe( res => this.cardDescription = res );

    this.imgUrl = [
      new Carousel( "https://swiperjs.com/demos/images/nature-1.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-2.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-3.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-4.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-5.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-6.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-7.jpg" )
    ];
  }
}
