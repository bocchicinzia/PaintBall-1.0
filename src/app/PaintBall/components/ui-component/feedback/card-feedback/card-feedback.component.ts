import { Component, Input, OnInit } from '@angular/core';
import { CardFeedbackFirebasePrint } from '../feedback.class';

@Component( {
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.scss']
} )
export class CardFeedbackComponent implements OnInit {
  checked: number;
  @Input() item: CardFeedbackFirebasePrint;

  constructor() {}

  ngOnInit(): void {
    this.checked = +this.item.star;
  }
  counter() {
    let i: number = 5;
    return new Array( i );
  }
}
