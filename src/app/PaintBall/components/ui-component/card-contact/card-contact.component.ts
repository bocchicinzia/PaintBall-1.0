import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  content: any[];
  unsubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.unsubscription = this.cardContents.subscribe( res => {
      this.content = res.contentCard
    } );
    this.selectedIndex = 0;
  }

  ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }

}
