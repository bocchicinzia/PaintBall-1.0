import { Component, ElementRef, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';

@Component( {
  selector: 'app-gallery-manager',
  templateUrl: './gallery-manager.component.html',
  styleUrls: ['./gallery-manager.component.scss']
} )
export class GalleryManagerComponent implements OnInit {

  constructor( private el: ElementRef,
    private SaveChangeservice: SaveChangeService ) {

  }

  ngOnInit(): void {
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
}
