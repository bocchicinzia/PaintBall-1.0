import { Component, ElementRef, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component( {
  selector: 'app-checkbox-star',
  templateUrl: './checkbox-star.component.html',
  styleUrls: ['./checkbox-star.component.scss']
} )
export class CheckboxStarComponent implements OnInit {
  @Output() valueStar = new EventEmitter();
  @Input() sendOk: boolean;
  checkbox: any;

  constructor( private el: ElementRef ) {}

  ngOnInit(): void {
    this.checkbox = this.el.nativeElement.querySelectorAll( 'input' );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.sendOk.currentValue ) {
      console.log( this.sendOk );
      this.checkbox.forEach( ( element: any ) => {
        element.checked = false;
      } )
    }
  }

  checkedStar( e: any ) {
    this.sendOk = false
    this.checkbox.forEach( ( element: any ) => {
      element.checked = false;
      if ( element.value === e.target.value ) {
        element.checked = true;
        this.valueStar.emit( e.target.value );
      }
    } );
  }
}
