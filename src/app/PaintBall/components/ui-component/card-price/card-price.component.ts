import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CardPriceModel } from './card-price-model.class';

@Component( {
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
} )
export class CardPriceComponent implements OnInit {
  @Input() cardPrice: CardPriceModel;

  constructor() {}

  ngOnInit(): void {}
}
