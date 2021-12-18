import { Component, OnInit } from '@angular/core';
import { MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
} )
export class MasterDetailComponent implements OnInit {
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
