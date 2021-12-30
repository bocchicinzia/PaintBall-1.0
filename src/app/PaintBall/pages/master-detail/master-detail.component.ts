import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Copyright } from '../../components/ui-component/footer/model/copyright.class';
import { MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';

@Component( {
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
} )
export class MasterDetailComponent implements OnInit {

  setTheme: any;
  getTheme: any;
  theme: boolean;
  menu: MenuNavbar[];
  copy: Copyright[];

  sticky: boolean = false;
  elementPosition: any;
  constructor( private overlayContainer: OverlayContainer, private contentDeleveryService: ContentDeliveryService ) {}

  ngOnInit(): void {
    this.contentDeleveryService.getAllContentHomePage( 'vertical-menu', 'vertical-menu' ).subscribe( res => this.menu = res.menu );
    this.contentDeleveryService.getAllContentHomePage( 'footer', 'footer_copyright' ).subscribe( res => this.copy = res.footer_copyright );

    this.getTheme = localStorage.getItem( 'theme' );
    this.getTheme === 'false' ? this.theme = false : this.theme = true;
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
