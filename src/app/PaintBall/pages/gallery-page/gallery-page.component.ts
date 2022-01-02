import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SaveChangeService } from './service/save-change.service';

@Component( {
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
} )
export class GalleryPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
