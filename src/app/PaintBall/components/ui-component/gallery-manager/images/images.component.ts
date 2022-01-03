import { Component, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';

@Component( {
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
} )
export class ImagesComponent implements OnInit {
  getImg: GalleryManager[];

  urls: GalleryManager[] = [
    { id: "1", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "2", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "3", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "4", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "5", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "6", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "7", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "8", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "9", path: 'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg' },
    { id: "10", path: 'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg' },
    { id: "11", path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: "12", path: 'https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg' },
    { id: "13", path: 'https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg' },
    { id: "14", path: 'https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg' },
  ];

  constructor( private service: ContentDeliveryServiceGalleryPage,
    private SaveChangeservice: SaveChangeService ) {}

  ngOnInit(): void {
    this.getImg = this.service.images( this.urls );

  }
  showImg( indexImage: number ) {
    this.SaveChangeservice.emitChange( indexImage );
    this.SaveChangeservice.emitChange( true );
  }

}
