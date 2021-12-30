import { Component, OnInit, Input } from '@angular/core';
import { CardPriceModel } from './card-price-model.class';

@Component( {
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
} )
export class CardPriceComponent implements OnInit {
  @Input() cardPrice: CardPriceModel[];

  constructor() { console.log( this.cardPrice ); }

  ngOnInit(): void {
    console.log( this.cardPrice );
  }

}
