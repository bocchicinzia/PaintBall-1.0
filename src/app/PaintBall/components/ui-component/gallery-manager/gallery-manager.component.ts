import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GalleryManager } from './gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from './service/content-delivery.service';

@Component( {
  selector: 'app-gallery-manager',
  templateUrl: './gallery-manager.component.html',
  styleUrls: ['./gallery-manager.component.scss']
} )
export class GalleryManagerComponent implements OnInit {
  @Output() isOpenFullScreen = new EventEmitter<boolean>();
  getImg: GalleryManager[];
  img: string = "";
  animate: any;

  urls: any[] = [
    { id: 1, path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: 2, path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: 3, path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: 4, path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: 5, path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: 6, path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: 7, path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: 8, path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: 9, path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: 10, path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: 11, path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: 12, path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: 13, path: 'https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg' },
    { id: 14, path: 'https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg' },
  ];

  constructor( private el: ElementRef, private service: ContentDeliveryServiceGalleryPage ) {}

  ngOnInit(): void {
    this.getImg = this.service.images( this.urls );
    this.animate = this.el.nativeElement.querySelector( '.animate__animated' );
  }

  onClick( e: any ) {
    let button = this.el.nativeElement.querySelectorAll( '.active' );
    button.forEach( ( element: any ) => {
      element.classList.remove( "active" );
    } );
    e.classList.add( 'active' );

    let attr = e.getAttribute( 'data-filter' );
    console.log( e );

    this.el.nativeElement.querySelector( '.portfolio-item' );
  }

  showImg( img: string ) {
    this.animate.classList.remove( "animate__backOutDown" );
    this.animate.classList.add( 'animate__backInDown' );
    this.img = img;
    this.isOpenFullScreen.emit( true )
  }
  hideImg() {
    this.animate.classList.remove( "animate__backInDown" );
    this.animate.classList.add( 'animate__backOutDown' );
    setTimeout( () => {
      this.img = "";
    }, 1000 );
    this.isOpenFullScreen.emit( false );
  }

}
