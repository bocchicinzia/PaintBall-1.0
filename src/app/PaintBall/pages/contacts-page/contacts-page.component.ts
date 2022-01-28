import { Component, HostListener, OnInit } from '@angular/core';

@Component( {
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
} )
export class ContactsPageComponent implements OnInit {
  windowScrolled: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }

  @HostListener( "window:scroll", [] )
  onWindowScroll() {
    if ( window.pageYOffset > 400 ) {
      this.windowScrolled = false;
    } else {
      this.windowScrolled = true;
    }
  }

  viewGoToFeedback( event: boolean ) {
    setTimeout( () => {
      this.windowScrolled = event;
    }, 1000 );
  }

}
