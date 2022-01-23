import { Component, Input, OnInit } from '@angular/core';
import { CardFeedbackFirebasePrint } from '../feedback.class';

@Component( {
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.scss']
} )
export class CardFeedbackComponent implements OnInit {

  @Input() item: CardFeedbackFirebasePrint;

  constructor() {}

  ngOnInit(): void {
  }

}
