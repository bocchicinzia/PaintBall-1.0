import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.scss']
} )
export class CardFeedbackComponent implements OnInit {

  @Input() item: any;

  constructor() {}

  ngOnInit(): void {
  }

}
