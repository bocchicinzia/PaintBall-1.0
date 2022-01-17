import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Carousel } from '../../components/ui-component/carousel/carousel.class';
import { FollowUs } from '../../components/ui-component/footer/model/follow-us.class';
import { Sponsor } from '../../components/ui-component/footer/model/sponsor.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { ContentMapper } from '../../services/content-mapper.interface';
import { HomePageModel } from './home-page.model';

@Component( {
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
} )
export class HomePageComponent implements OnInit, ContentMapper<HomePageModel>{
  cardDescription: HomePageModel;
  imgUrl: Carousel[];
  followUs: FollowUs[];
  sponsor: Sponsor[];

  cardSub: Subscription;
  carousel: Subscription;
  footerFollow: Subscription;
  footerSponsor: Subscription;

  constructor( private contentDeleveryService: ContentDeliveryService ) {}


  ngOnInit(): void {
    this.cardSub = this.contentDeleveryService.get( 'card', 'card', this ).subscribe( res => this.cardDescription = res );
    this.carousel = this.contentDeleveryService.get( 'carousel', 'carousel', this ).subscribe( res => this.imgUrl = res.carousel );
    this.footerFollow = this.contentDeleveryService.get( 'footer', 'footer_followUs', this ).subscribe( res => this.followUs = res.footer_followUs );
    this.footerSponsor = this.contentDeleveryService.get( 'footer', 'footer_sponsor', this ).subscribe( res => this.sponsor = res.footer_sponsor );
  }

  map( json: any, className: string ) {
    return new HomePageModel( json, className );
  }

  ngOnDestroy(): void {
    this.cardSub.unsubscribe();
    this.carousel.unsubscribe();
    this.footerFollow.unsubscribe();
    this.footerSponsor.unsubscribe();
  }
}
