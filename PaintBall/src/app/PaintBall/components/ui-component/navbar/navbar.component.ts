import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Platform } from 'src/app/PaintBall/utils/platform.class';
import { MenuNavbar } from './menuNavbar.class';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  @ViewChild( 'stickyMenu' ) menuElement: ElementRef;

  @Input() menu: MenuNavbar[] = [];
  @Input() sidenav: MatSidenav;
  isMobile: boolean;
  opened: MatSidenav;

  sticky: boolean = false;
  elementPosition: any;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener( 'window:scroll', ['$event'] )
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if ( windowScroll >= this.elementPosition ) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


}
