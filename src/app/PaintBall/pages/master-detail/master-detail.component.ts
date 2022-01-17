import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Copyright } from '../../components/ui-component/footer/model/copyright.class';
import { ContentNavbar, MenuNavbar } from '../../components/ui-component/navbar/menuNavbar.class';
import { ContentDeliveryService } from '../../services/content-delivery.service';
import { ContentMapper } from '../../services/content-mapper.interface';
import { SaveChangeService } from '../gallery-page/service/save-change.service';
import { HomePageModel } from '../home-page/home-page.model';

@Component( {
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
} )
export class MasterDetailComponent implements OnInit, ContentMapper<HomePageModel> {

  setTheme: any;
  getTheme: any;
  theme: boolean;
  menu: MenuNavbar[];
  contentNavbar: ContentNavbar;
  copy: Copyright[];
  openImageFullScreen: boolean = false;

  sticky: boolean = false;
  elementPosition: any;
  constructor( private overlayContainer: OverlayContainer,
    private contentDeleveryService: ContentDeliveryService,
    private saveChangeService: SaveChangeService ) {
    saveChangeService.changeEmitted$.subscribe(
      change => {
        this.openImageFullScreen = change;
      } );
    this.contentDeleveryService.get( 'vertical-menu', 'vertical-menu', this ).subscribe( res => this.menu = res.menu );
    this.contentDeleveryService.get( 'footer', 'footer_copyright', this ).subscribe( res => this.copy = res.footer_copyright );
    this.contentDeleveryService.get( 'content-navbar', 'content-navbar', this ).subscribe( res => this.contentNavbar = res.contentNavbar[0] );
  }
  ngOnInit(): void {
    this.getTheme = localStorage.getItem( 'theme' );
    this.getTheme === 'false' ? this.theme = false : this.theme = true;
    this.themeChange( this.theme );
  }
  map( json: any, className: string ) {
    return new HomePageModel( json, className );
  }

  map( json: any, className: string ) {
    return new HomePageModel( json, className );
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

  scrolled: boolean;
  isScrolled( event: boolean ) {
    this.scrolled = event;
  }
}
