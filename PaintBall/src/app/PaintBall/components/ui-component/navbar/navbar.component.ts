import { Component, OnInit } from '@angular/core';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import { Navbar } from './navbar.class';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  menu: Navbar[] = [];
  isMobile: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
    console.log( this.isMobile );

    this.menu = [
      new Navbar( 'Home', 'home' ),
      new Navbar( 'Prezzo', 'prezzo' ),
      new Navbar( 'Galleria', 'galleria' ),
      new Navbar( 'Contatti', 'contatti' )
    ]
  }

}
