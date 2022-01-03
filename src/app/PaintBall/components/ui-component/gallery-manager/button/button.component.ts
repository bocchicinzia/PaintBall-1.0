import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
} )
export class ButtonComponent implements OnInit {

  getImg: GalleryManager[];

  constructor( private el: ElementRef,
    private service: ContentDeliveryServiceGalleryPage,
    private saveChange: SaveChangeService ) {}

  ngOnInit(): void {
    this.service.getAllContentGalleryPage( 'gallery-page' ).subscribe( res => {
      this.getImg = res;
    } );
  }


  onClick( e: any ) {
    let button = this.el.nativeElement.querySelectorAll( '.active' );
    button.forEach( ( element: any ) => {
      element.classList.remove( "active" );
    } );
    e.classList.add( 'active' );

    let attr = e.getAttribute( 'data-filter' );
    this.fetchData( attr );

    // this.el.nativeElement.querySelector( '.portfolio-item' );
  }

  fetchData( attr: any ) {
    this.getImg = this.getImg.filter( res => res.email === attr );
    console.log( this.getImg, attr );
    this.saveChange.emitChange( this.getImg );
  }

}
