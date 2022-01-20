import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component( {
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
} )
export class PaginatorComponent implements OnInit {


  @Input() feedbackLength: number;

  private _pageSlice: any;
  public get pageSlice() {
    return this._pageSlice;
  }

  @Input()
  public set pageSlice( value ) {
    this._pageSlice = value;
    this.pageSliceChange.emit( this._pageSlice );
  }

  @Output()
  pageSliceChange = new EventEmitter<any>();


  @Input() arrayReverse: any[];

  constructor() {}

  ngOnInit(): void {
  }


  onPageChange( event: PageEvent ) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if ( endIndex > this.feedbackLength ) {
      endIndex = this.feedbackLength;
    }
    this.pageSlice = this.arrayReverse.slice( startIndex, endIndex ).reverse();
  }
}
