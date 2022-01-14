import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { TabGroupContacts } from './tab-group-contacts.model.class';

@Component( {
  selector: 'app-tab-contacts',
  templateUrl: './tab-contacts.component.html',
  styleUrls: ['./tab-contacts.component.scss']
} )
export class TabContactsComponent implements OnInit {
  content: TabGroupContacts[];
  selectedIndexChange: number;
  cardContents: Observable<ContactsPageModel>;

  constructor( private deliveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.content = [
      new TabGroupContacts( "Zakaria", "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/108592190_180181263532271_4885442392037149609_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=4M4AgKRiExkAX9hRBt8&_nc_ht=scontent-mxp1-1.xx&oh=00_AT-KZ93qe8EB7n98_VuVhADU19iBouVHSPJiAXX0LfGeqA&oe=6202C264", "foto dei nostri soci" ),
      new TabGroupContacts( "Ahmed", "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/108996828_180180960198968_9015687922758116862_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wKp0lLlieLcAX9Ocbp9&_nc_oc=AQnNdz_NVDOX6AG7IuZr1hPbOV_I24Q3upXKZC1TcAUVXshs7bQFokfzpm3Vs-SIB9o&_nc_ht=scontent-mxp1-1.xx&oh=00_AT-yvpo_onEY9tKhTfIW46t644pBCF-b4TX2215IAiIOJA&oe=62028824", "foto dei nostri soci" ),
      new TabGroupContacts( "Aziz", "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/83377074_106658374217894_7998945197989822464_n.png?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=kYHZEONY06gAX_7lDXK&_nc_oc=AQlrXZtAXg13aKewLFFNScxmhcClE2gvmTsv8boWNKRRIZp8B9c6VGdkCpz0f-TJd6c&_nc_ht=scontent-mxp1-1.xx&oh=00_AT_huUbB__uzc9waz1aWE36v1bCgkR2-MoVnYcxNduOswA&oe=6204E06B", "foto dei nostri soci" )
    ]
    this.cardContents = this.deliveryService.getAllContentContactsPage( 'card-contacts', 'card-contacts' );
  }

  selectedIndex( e: number ) {
    this.selectedIndexChange = e;
  }
}
