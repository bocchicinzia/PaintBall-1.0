import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SaveChangeService } from './service/save-change.service';

@Component( {
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
} )
export class GalleryPageComponent implements OnInit {
  constructor( private SaveChangeservice: SaveChangeService ) {}

  ngOnInit(): void {
  }

  isOpen( event: any ) {
    this.SaveChangeservice.emitChange( event );
  }
}
