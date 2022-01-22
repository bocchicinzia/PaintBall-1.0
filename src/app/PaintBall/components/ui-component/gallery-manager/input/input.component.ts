import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';
import { InputGallery } from './input.class';

@Component( {
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
} )
export class InputComponent implements OnInit {
  input: Observable<InputGallery>;
  email: string;

  constructor( private service: ContentDeliveryServiceGalleryPage,
    private saveChange: SaveChangeService ) {}

  ngOnInit(): void {
    this.input = this.service.getInputGalleryPage( 'gallery-input', 'input' );
  }

  getValue() {
    let filter = this.email;
    this.email ? filter.trim().toLowerCase() : this.email;

    if ( !filter )
      filter = '*';

    this.saveChange.emitChange( filter );
  }
}
