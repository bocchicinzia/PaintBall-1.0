import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';

@Component( {
  selector: 'app-tab-contacts',
  templateUrl: './tab-contacts.component.html',
  styleUrls: ['./tab-contacts.component.scss']
} )
export class TabContactsComponent implements OnInit {
  content: Observable<ContactsPageModel>;
  selectedIndexChange: number;
  cardContents: Observable<ContactsPageModel>;

  constructor( private deliveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.content = this.deliveryService.getAllContentContactsPage( 'tabs-contacts', 'tabs-contacts' );
    this.cardContents = this.deliveryService.getAllContentContactsPage( 'card-contacts', 'card-contacts' );
  }

  selectedIndex( e: number ) {
    this.selectedIndexChange = e;
  }
}
