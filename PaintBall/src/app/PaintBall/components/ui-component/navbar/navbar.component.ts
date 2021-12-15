import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar.class';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  menu: Navbar[] = [];
  constructor() {}

  ngOnInit(): void {
    this.menu = [
      new Navbar( 'Home', 'home' ),
      new Navbar( 'Prezzo', 'prezzo' ),
      new Navbar( 'Galleria', 'galleria' ),
      new Navbar( 'Contatti', 'contatti' )
    ]
  }

}
