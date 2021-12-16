import { Component, Input, OnInit } from '@angular/core';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import { MenuNavbar } from './menuNavbar.class';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  @Input() menu: MenuNavbar[] = [];
  isMobile: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }
}
