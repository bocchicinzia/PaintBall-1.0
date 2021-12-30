import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';
import { FollowUs } from '../../components/ui-component/footer/model/follow-us.class';
import { Sponsor } from '../../components/ui-component/footer/model/sponsor.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { HomePageModel } from './home-page.model';

@Component( {
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
} )
export class HomePageComponent implements OnInit {
  cardDescription: HomePageModel;
  imgUrl: Carousel[];
  followUs: FollowUs[];
  sponsor: Sponsor[];

  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAllContentHomePage( 'card', 'card' ).subscribe( res => this.cardDescription = res );
    this.contentDeleveryService.getAllContentHomePage( 'carousel', 'carousel' ).subscribe( res => this.imgUrl = res.carousel );
    this.contentDeleveryService.getAllContentHomePage( 'footer', 'footer_followUs' ).subscribe( res => this.followUs = res.footer_followUs );
    this.contentDeleveryService.getAllContentHomePage( 'footer', 'footer_sponsor' ).subscribe( res => this.sponsor = res.footer_sponsor );

  }
}
