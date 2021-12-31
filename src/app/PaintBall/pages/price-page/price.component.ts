import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { PricePageModel } from './price-page.model';

@Component( {
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
} )
export class PriceComponent implements OnInit {
  cardPrice: Observable<PricePageModel>;
  constructor( private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.cardPrice = this.contentDeleveryService.getAllContentPricePage( 'card-price', 'card-price' );
  }
}
