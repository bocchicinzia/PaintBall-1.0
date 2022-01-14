import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { CardContact } from './card-contact-model.class';

@Component( {
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
} )
export class CardContactComponent implements OnInit {
  @Input() selectedIndex: number;
  @Input() cardContents: Observable<ContactsPageModel>;
  content: CardContact[];

  constructor() {}

  ngOnInit(): void {
    this.cardContents.subscribe( res => {
      this.content = res.contentCard
      console.log( this.content );
    } );

    this.selectedIndex = 0;
  }

}
