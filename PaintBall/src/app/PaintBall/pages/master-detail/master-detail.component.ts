import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';

@Component( {
  selector: 'app-home-pages',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
} )
export class MasterDetailComponent implements OnInit {

  setTheme: any;
  getTheme: any;
  theme: boolean;
  menu: MenuNavbar[];

  sticky: boolean = false;
  elementPosition: any;
  constructor( private overlayContainer: OverlayContainer, private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAllContent( 'vertical-menu', 'vertical-menu' ).subscribe( res => this.menu = res.menu );

    this.getTheme = localStorage.getItem( 'theme' );
    this.getTheme === 'true' ? this.theme = true : this.theme = false;
    this.themeChange( this.theme );
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

  @HostBinding( 'class' ) className = '';
  themeChange( theme: boolean ) {
    const darkModeClass = 'darkMode';
    const classes = this.overlayContainer.getContainerElement().classList;

    this.className = theme ? darkModeClass : '';
    if ( theme ) {
      this.setTheme = localStorage.setItem( 'theme', 'true' );
      classes.add( darkModeClass );
    } else {
      this.setTheme = localStorage.setItem( 'theme', 'false' );
      classes.remove( darkModeClass );
    }
  }
}
