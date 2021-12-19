import { Component, HostListener, OnInit } from '@angular/core';
import { MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
} )
export class MasterDetailComponent implements OnInit {

  menu: MenuNavbar[];

  sticky: boolean = false;
  elementPosition: any;
  constructor() {}

  ngOnInit(): void {
    this.menu = [
      new MenuNavbar( 'Home', 'home' ),
      new MenuNavbar( 'Prezzo', 'prezzo' ),
      new MenuNavbar( 'Galleria', 'galleria' ),
      new MenuNavbar( 'Contatti', 'contatti' )
    ]
  }

  @HostListener( 'window:scroll', ['$event'] )
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if ( windowScroll >= 140 ) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
