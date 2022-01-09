import { Component, ElementRef, OnInit } from '@angular/core';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
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
    private service: ContentDeliveryServiceGalleryPage,
    private el: ElementRef ) {
    this.saveChangeservice.changeEmittedString$.subscribe( change => this.getImages( change ) );
  }

  ngOnInit(): void {
    this.getImages( '*' );
  }

  private getImages( attr: string ) {
    this.service.getAllImages( attr ).subscribe( res => this.galleryContent = res.map( path => path.path ) );
  }
  downloadAnimate = false;
  barAnimate = false;
  btnArrowAnimate = false;
  btnStopAnimate = false;
  btnDoneAnimate = false;

  download() {

    this.downloadAnimate = !this.downloadAnimate;
    this.barAnimate = !this.barAnimate;
    this.btnArrowAnimate = !this.btnArrowAnimate;
    this.btnStopAnimate = !this.btnStopAnimate;
    this.btnDoneAnimate = !this.btnDoneAnimate;

    if ( this.downloadAnimate ) {
      setTimeout( () => {
        this.serviceDownload.downloadAllImages( this.galleryContent );
      }, 3000 );
    }
  }
}
