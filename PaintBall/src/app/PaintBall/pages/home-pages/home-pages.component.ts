import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/ui-component/card/card.class';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
} )
export class HomePagesComponent implements OnInit {
  card: Card[];
  constructor() {}

  ngOnInit(): void {
    this.card = [
      new Card( 'PaintBall', 'Piccola descrizione della nostra attivià', "What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment." )
    ]
  }

}
