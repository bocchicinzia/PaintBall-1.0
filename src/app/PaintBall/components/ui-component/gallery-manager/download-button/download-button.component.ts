import { Component, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { GalleryManager } from '../gallery-manager.class';
import { ContentDeliveryServiceGalleryPage } from '../service/content-delivery.service';
import { DownloadService } from './service/download.service';

@Component( {
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
} )
export class DownloadButtonComponent implements OnInit {
  galleryContent: string[];

  constructor( private serviceDownload: DownloadService,
    private saveChangeservice: SaveChangeService,
    private service: ContentDeliveryServiceGalleryPage ) {
    this.saveChangeservice.changeEmittedString$.subscribe( change => this.getImages( change ) );
  }

  ngOnInit(): void {
    this.getImages( '*' );
  }

  private getImages( attr: string ) {
    this.service.getAllImages( attr ).subscribe( res => this.galleryContent = res.map( path => path.path ) );
  }
  download() {
    this.serviceDownload.downloadAllImages( this.galleryContent );
  }
}
