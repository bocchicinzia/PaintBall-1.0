import { Component, Input, OnInit } from '@angular/core';
import { CardPriceModel } from '../card-price/card-price-model.class';

@Component( {
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
} )
export class TabComponent implements OnInit {
  @Input() cardPrice: CardPriceModel[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
