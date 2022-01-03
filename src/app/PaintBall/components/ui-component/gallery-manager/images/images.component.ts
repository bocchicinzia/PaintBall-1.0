import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';

@Component( {
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
} )
export class ImagesComponent implements OnInit {
  getImg: Observable<GalleryManager[]>;

  urls: GalleryManager[];

  constructor( private service: ContentDeliveryServiceGalleryPage,
    private SaveChangeservice: SaveChangeService ) {}

  ngOnInit(): void {
    this.getImg = this.service.getAllContentGalleryPage( 'gallery-page' );

  }
  showImg( indexImage: number ) {
    this.SaveChangeservice.emitChange( indexImage );
    this.SaveChangeservice.emitChange( true );
  }

}
