import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { ContentMapper } from 'src/app/PaintBall/services/content-mapper.interface';

@Component( {
  selector: 'app-tab-contacts',
  templateUrl: './tab-contacts.component.html',
  styleUrls: ['./tab-contacts.component.scss']
} )
export class TabContactsComponent implements OnInit, ContentMapper<ContactsPageModel> {
  content: Observable<ContactsPageModel>;
  selectedIndexChange: number;
  cardContents: Observable<ContactsPageModel>;

  constructor( private deliveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.content = this.deliveryService.get( 'tabs-contacts', 'tabs-contacts', this );
    this.cardContents = this.deliveryService.get( 'card-contacts', 'card-contacts', this );
  }
  map( json: any, className: string ) {
    return new ContactsPageModel( json, className );
  }

  selectedIndex( e: number ) {
    this.selectedIndexChange = e;
  }
}
