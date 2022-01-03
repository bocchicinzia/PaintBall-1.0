import { Component, ElementRef, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';

@Component( {
  selector: 'app-image-full-screen',
  templateUrl: './image-full-screen.component.html',
  styleUrls: ['./image-full-screen.component.scss']
} )
export class ImageFullScreenComponent implements OnInit {
  img: string = "";
  count: number;
  animate: any;
  showBackgroundIcon: boolean;
  landscape = window.matchMedia( "(orientation: landscape)" );
  rotate: boolean;

  urls: GalleryManager[] = [
    { id: "1", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "2", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "3", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "4", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "5", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "6", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "7", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "8", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "9", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "10", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "11", path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: "12", path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: "13", path: 'https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg' },
    { id: "14", path: 'https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg' },
  ];

  constructor( private el: ElementRef,
    private saveChangeservice: SaveChangeService ) {
    this.landscape.addEventListener( "change", ev => this.rotate = this.landscape.matches );
    saveChangeservice.changeEmittedString$.subscribe(
      change => {
        this.showImg( change );
      } );
  }

  ngOnInit(): void {
    this.animate = this.el.nativeElement.querySelector( '.animate__animated:first-child' );
    if ( window.orientation === 90 )
      this.rotate = true;
    else
      this.rotate = false;
  }

  showImg( event: any ) {
    this.animate.classList.remove( "animate__backOutDown" );
    this.animate.classList.add( 'animate__backInDown' );
    this.img = this.urls[event].path;
    this.count = event;

  }

  hideImg() {
    this.animate.classList.remove( "animate__rotateIn" );
    this.animate.classList.remove( "animate__backInDown" );
    this.animate.classList.add( 'animate__backOutDown' );
    setTimeout( () => {
      this.img = "";
    }, 1000 );
    this.saveChangeservice.emitChange( false );
  }
  nextImg() {
    if ( this.count < this.urls.length - 1 ) {
      this.animate.classList.add( 'animate__rotateOut' );
      this.animate.classList.remove( "animate__rotateIn" );
      this.count++;
      setTimeout( () => {
        this.animate.classList.remove( 'animate__rotateOut' );
        this.img = this.urls[this.count].path;
        this.animate.classList.add( 'animate__rotateIn' );
      }, 1000 );
    } else {
      this.count = 0;
      this.img = this.urls[this.count].path;
    }
  }
  beforeImg() {
    if ( this.count > 0 ) {
      this.count--;
      this.img = this.urls[this.count].path;
    } else {
      this.count = this.urls.length - 1;
      this.img = this.urls[this.count].path;
    }
  }
}
