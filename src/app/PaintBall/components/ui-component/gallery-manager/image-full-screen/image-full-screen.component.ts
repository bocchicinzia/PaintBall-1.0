import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';

@Component( {
  selector: 'app-image-full-screen',
  templateUrl: './image-full-screen.component.html',
  styleUrls: ['./image-full-screen.component.scss']
} )
export class ImageFullScreenComponent implements OnInit {
  img: string = "";
  count: number;
  animate: any;
  showBackgroundIcon: boolean = true;
  landscape = window.matchMedia( "(orientation: landscape)" );
  rotate: boolean;

  galleryContent: GalleryManager[];
  unsubscription: Subscription;

  constructor( private el: ElementRef,
    private saveChangeservice: SaveChangeService,
    private service: ContentDeliveryServiceGalleryPage ) {
    this.landscape.addEventListener( "change", ev => this.rotate = this.landscape.matches );
    saveChangeservice.changeEmittedNumber$.subscribe(
      ( change: number ) => {
        this.showImg( change );
      } );
  }

  ngOnInit(): void {
    this.animate = this.el.nativeElement.querySelector( '.animate__animated:first-child' );
    if ( window.orientation === 90 )
      this.rotate = true;
    else
      this.rotate = false;
    this.unsubscription = this.service.getAllContentGalleryPage( 'gallery-page' ).subscribe( res => this.galleryContent = res );
  }

  ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }

  showAllOption() {
    this.showBackgroundIcon = !this.showBackgroundIcon;
  }

  //show and hide image full screen
  showImg( event: number ) {
    this.animationComponent( 'showDiv' );
    this.img = this.galleryContent[event].path;
    this.count = event;
  }

  hideImg() {
    this.animationComponent( 'hideDiv' );
    setTimeout( () => {
      this.img = "";
    }, 1000 );
    this.saveChangeservice.emitChange( false );
  }

  //next and before image on carousel
  nextImg() {
    if ( this.count < this.galleryContent.length - 1 ) {
      this.animationComponent( 'showNextImg' );
      this.count++;
      setTimeout( () => {
        this.img = this.galleryContent[this.count].path;
        this.animationComponent( 'hideNextImg' );
      }, 1000 );
    } else {
      this.animationComponent( 'showNextImg' );
      this.count = 0;
      setTimeout( () => {
        this.img = this.galleryContent[this.count].path;
        this.animationComponent( 'hideNextImg' );
      }, 1000 );
    }
  }

  beforeImg() {
    if ( this.count > 0 ) {
      this.animationComponent( 'showNextImg' );
      this.count--;
      setTimeout( () => {
        this.img = this.galleryContent[this.count].path;
        this.animationComponent( 'hideNextImg' );
      }, 1000 );
    } else {
      this.animationComponent( 'showNextImg' );
      this.count = this.galleryContent.length - 1;
      setTimeout( () => {
        this.img = this.galleryContent[this.count].path;
        this.animationComponent( 'hideNextImg' );
      }, 1000 );
    }
  }

  //switch case for animation
  private animationComponent( event: string ) {
    switch ( event ) {
      case 'showDiv':
        this.animate.classList.remove( "animate__backOutDown" );
        this.animate.classList.add( 'animate__backInDown' );
        break;
      case 'hideDiv':
        this.animate.classList.remove( "animate__rotateIn" );
        this.animate.classList.remove( "animate__backInDown" );
        this.animate.classList.add( 'animate__backOutDown' );
        break;
      case 'showNextImg':
        this.animate.classList.add( 'animate__rotateOut' );
        this.animate.classList.remove( "animate__rotateIn" );
        break;
      case 'hideNextImg':
        this.animate.classList.remove( 'animate__rotateOut' );
        this.animate.classList.add( 'animate__rotateIn' );
        break;
    }
  }
}
