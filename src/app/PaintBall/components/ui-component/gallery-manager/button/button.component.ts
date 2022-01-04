import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';
import { ButtonGallery } from './button-gallery.class';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
} )
export class ButtonComponent implements OnInit {

  getImg: GalleryManager[];
  button: Observable<ButtonGallery[]>;

  constructor( private el: ElementRef,
    private saveChange: SaveChangeService,
    private service: ContentDeliveryServiceGalleryPage ) {
  }

  ngOnInit(): void {
    this.button = this.service.getAllButtonGalleryPage( 'gallery-button' );
    setTimeout( () => {
      this.el.nativeElement.querySelector( 'button:first-child' ).classList.add( 'active' );
    }, 1000 );
  }

  onClick( e: any ) {
    let button = this.el.nativeElement.querySelectorAll( '.active' );
    button.forEach( ( element: any ) => {
      element.classList.remove( "active" );
    } );
    e.classList.add( 'active' );

    let attr = e.getAttribute( 'id' );
    this.saveChange.emitChange( attr );
  }
}
