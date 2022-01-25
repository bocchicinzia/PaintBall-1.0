import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import { ContentNavbar, MenuNavbar } from './menuNavbar.class';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  @Output() themeChange = new EventEmitter();
  @Output() isDarkOnLoad = new EventEmitter();
  isDark: boolean = false;
  theme: any;

  @Input() menu: MenuNavbar[] = [];
  @Input() contentNavbar: ContentNavbar;
  @Input() sidenav: MatSidenav;
  isMobile: boolean;
  opened: MatSidenav;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
    this.theme = localStorage.getItem( 'theme' );
    this.isDark = this.theme === 'true' ? true : false;
    console.log( this.contentNavbar );

  }
  changeTheme() {
    this.isDark = !this.isDark;
    this.themeChange.emit( this.isDark )
  }
}
