import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { ContentMapper } from '../../services/content-mapper.interface';
import { PricePageModel } from './price-page.model';

@Component( {
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
} )
export class PriceComponent implements OnInit, ContentMapper<PricePageModel> {
  cardPrice: Observable<PricePageModel>;
  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.cardPrice = this.contentDeleveryService.get( 'card-price', 'card-price', this );
  }
  map( json: any, className: string ) {
    return new PricePageModel( json, className );
  }
}
