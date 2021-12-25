import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';
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

  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAllContent( 'card', 'card' ).subscribe( res => this.cardDescription = res );
    this.contentDeleveryService.getAllContent( 'carousel', 'carousel' ).subscribe( res => this.imgUrl = res.carousel );
  }
}
