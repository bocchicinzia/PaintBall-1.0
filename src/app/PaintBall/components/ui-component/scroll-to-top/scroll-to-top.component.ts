import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component( {
  selector: 'app-go-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
} )
export class ScrollToTopComponent implements OnInit {
  @Output() isScrolled = new EventEmitter<boolean>();

  windowScrolled = false;
  constructor() {}

  ngOnInit(): void {
  }

  @HostListener( "window:scroll", [] )
  onWindowScroll() {
    if ( window.pageYOffset > 400 ) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
    this.isScrolled.emit( this.windowScrolled );
  }

  goToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
