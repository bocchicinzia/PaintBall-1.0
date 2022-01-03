import { Component, ElementRef, OnInit } from '@angular/core';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
} )
export class ButtonComponent implements OnInit {

  constructor( private el: ElementRef ) {}

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
