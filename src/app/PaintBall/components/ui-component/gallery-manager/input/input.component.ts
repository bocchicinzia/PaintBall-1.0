import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';
import { InputGallery } from './input.class';

@Component( {
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
} )
export class InputComponent implements OnInit {
  input: Observable<InputGallery>;
  constructor( private service: ContentDeliveryServiceGalleryPage ) {}

  ngOnInit(): void {
    this.input = this.service.getInputGalleryPage( 'gallery-input' );
    this.input.subscribe( a => console.log( a ) );
  }

}
