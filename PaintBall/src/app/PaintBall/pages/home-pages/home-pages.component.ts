import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';
import { FollowUs } from '../../components/ui-component/footer/model/follow-us.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { TestModel } from '../master-detail/testModel.model';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
} )
export class HomePagesComponent implements OnInit {
  cardDescription: TestModel;
  imgUrl: Carousel[];
  followUs: FollowUs[];

  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAllContent( 'card', 'card' ).subscribe( res => this.cardDescription = res );
    this.contentDeleveryService.getAllContent( 'carousel', 'carousel' ).subscribe( res => this.imgUrl = res.carousel );

    this.followUs = [
      new FollowUs( 'www.facebook.com/painball', 'Facebook', './assets/icons/facebook.svg ', 'Potete seguirci anche sui social' ),
      new FollowUs( 'www.instagram.com/painball', 'Instagram', './assets/icons/instagram.svg ', '' ),
    ];
  }
}
