import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from 'src/app/PaintBall/pages/home-pages/testModel.model';
import { Card } from './card.class';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
} )
export class CardComponent implements OnInit {
  @Input() model: Card;
  constructor() {}

  ngOnInit(): void {
  }
}
