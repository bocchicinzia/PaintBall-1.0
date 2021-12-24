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
  count: number = 0;
  constructor( private el: ElementRef ) {}
  paragraphs: any;
  activeParagraph: any;
  activeParagraphIndex: number = 0;


  ngOnInit(): void {
    setTimeout( () => {
      this.getAllParagraph()
    }, 0 )
  }

  getAllParagraph() {
    this.paragraphs = this.el.nativeElement.querySelectorAll( '.description' );
    this.paragraphs[0].classList.add( 'active' );
  }
  test( a: any ) {
    this.activeParagraph = this.paragraphs[a];

    if ( this.activeParagraph ) {
      this.paragraphs.forEach( ( element: any ) => {
        element.classList.remove( 'active' )
      } );
      this.activeParagraph.classList.add( 'active' );
    }
  }

}
