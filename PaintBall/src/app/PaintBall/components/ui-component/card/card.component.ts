import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Card } from './card.class';
import SwiperCore, { EffectCards } from "swiper";
SwiperCore.use( [EffectCards] );
@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
} )
export class CardComponent implements OnInit {

  @Input() model: Card;

  constructor( private el: ElementRef ) {}

  paragraphs: any;
  activeParagraph: any;


  ngOnInit(): void {
    setTimeout( () => {
      this.getAllParagraph()
    }, 0 )
  }

  getAllParagraph() {
    this.paragraphs = this.el.nativeElement.querySelectorAll( '.description' );
    this.paragraphs[0].classList.add( 'animate__fadeInLeftBig' );
    if ( this.paragraphs[1] ) {
      for ( let i = 1; i < this.paragraphs.length; i++ ) {
        this.paragraphs[i].classList.add( 'animate__fadeOutRightBig' );
      }
    }
  }
  test( event: any ) {
    this.activeParagraph = this.paragraphs[event];

    if ( this.activeParagraph ) {
      this.paragraphs.forEach( ( element: any ) => {
        element.classList.remove( 'animate__fadeInLeftBig' );
        element.classList.add( 'animate__fadeOutRightBig' );
      } );

      setTimeout( () => {
        this.activeParagraph.classList.add( 'animate__fadeInLeftBig' );
        this.activeParagraph.classList.remove( 'animate__fadeOutRightBig' );
      }, 500 );
    }

  }

}
