import { Component, ElementRef, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';

@Component( {
  selector: 'app-gallery-manager',
  templateUrl: './gallery-manager.component.html',
  styleUrls: ['./gallery-manager.component.scss']
} )
export class GalleryManagerComponent implements OnInit {
  img: string = "";
  animate: any;
  showBackgroundIcon: boolean;
  landscape = window.matchMedia( "(orientation: landscape)" );
  rotate: boolean;


  constructor( private el: ElementRef,
    private SaveChangeservice: SaveChangeService ) {
    this.landscape.addEventListener( "change", ev => this.rotate = this.landscape.matches );
  }

  ngOnInit(): void {
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

  hideImg() {
    this.animate.classList.remove( "animate__backInDown" );
    this.animate.classList.add( 'animate__backOutDown' );
    setTimeout( () => {
      this.img = "";
    }, 1000 );
    this.SaveChangeservice.emitChange( false );
  }

  showImg( event: string ) {
    this.animate.classList.remove( "animate__backOutDown" );
    this.animate.classList.add( 'animate__backInDown' );
    this.img = event;
  }
}
