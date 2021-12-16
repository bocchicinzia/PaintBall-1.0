import { Component, OnInit } from '@angular/core';
import { MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
} )
export class HomePagesComponent implements OnInit {
  menu: MenuNavbar[];
  constructor() {}

  ngOnInit(): void {

    this.menu = [
      new MenuNavbar( 'Home', 'home' ),
      new MenuNavbar( 'Prezzo', 'prezzo' ),
      new MenuNavbar( 'Galleria', 'galleria' ),
      new MenuNavbar( 'Contatti', 'contatti' )
    ]
  }

}
