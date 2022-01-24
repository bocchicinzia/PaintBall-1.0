import { Component, HostListener, OnInit } from '@angular/core';

@Component( {
  selector: 'app-go-to-button',
  templateUrl: './go-to-button.component.html',
  styleUrls: ['./go-to-button.component.scss']
} )
export class GoToButtonComponent implements OnInit {
  windowScrolled: boolean = false;

  constructor() {}

  @HostListener( "window:scroll", [] )
  onWindowScroll() {
    if ( window.pageYOffset > 400 ) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  ngOnInit(): void {
  }

}
