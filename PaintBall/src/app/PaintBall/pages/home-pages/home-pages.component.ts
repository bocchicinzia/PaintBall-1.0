import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/ui-component/card/card.class';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
} )
export class HomePagesComponent implements OnInit {
  card: Card[];
  imgUrl: Carousel[];
  constructor() {}

  ngOnInit(): void {
    this.card = [
      new Card( 'PaintBall', 'Piccola descrizione della nostra attivià', "What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment." )
    ];
    this.imgUrl = [
      new Carousel( "https://swiperjs.com/demos/images/nature-1.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-2.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-3.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-4.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-5.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-6.jpg" ),
      new Carousel( "https://swiperjs.com/demos/images/nature-7.jpg" )
    ]
  }

}
