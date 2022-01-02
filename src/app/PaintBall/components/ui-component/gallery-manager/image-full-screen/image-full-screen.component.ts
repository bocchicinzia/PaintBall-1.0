import { Component, ElementRef, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';

@Component( {
  selector: 'app-image-full-screen',
  templateUrl: './image-full-screen.component.html',
  styleUrls: ['./image-full-screen.component.scss']
} )
export class ImageFullScreenComponent implements OnInit {
  img: string = "";
  animate: any;
  showBackgroundIcon: boolean;
  landscape = window.matchMedia( "(orientation: landscape)" );
  rotate: boolean;

  constructor( private el: ElementRef,
    private saveChangeservice: SaveChangeService ) {
    this.landscape.addEventListener( "change", ev => this.rotate = this.landscape.matches );
    saveChangeservice.changeEmittedString$.subscribe(
      change => {
        this.showImg( change );
      } );
  }

  ngOnInit(): void {
    this.animate = this.el.nativeElement.querySelector( '.animate__animated' );
  }


  showImg( event: any ) {
    this.animate.classList.remove( "animate__backOutDown" );
    this.animate.classList.add( 'animate__backInDown' );
    this.img = event;
  }

  hideImg() {
    this.animate.classList.remove( "animate__backInDown" );
    this.animate.classList.add( 'animate__backOutDown' );
    setTimeout( () => {
      this.img = "";
    }, 1000 );
    this.saveChangeservice.emitChange( false );
  }
}
