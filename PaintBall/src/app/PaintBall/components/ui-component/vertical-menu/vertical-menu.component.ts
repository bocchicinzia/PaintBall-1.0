import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import { MenuNavbar } from '../navbar/menuNavbar.class';

@Component( {
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
} )
export class VerticalMenuComponent implements OnInit {
  @Input() menu: MenuNavbar[] = [];
  @Input() sidenav: MatSidenav;
  isMobile: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }
}
