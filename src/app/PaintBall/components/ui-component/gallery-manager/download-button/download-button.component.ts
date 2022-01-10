import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  downloadAnimate = false;
  barAnimate = false;
  btnArrowAnimate = false;
  btnStopAnimate = false;
  btnDoneAnimate = false;

  unsubscription: Subscription;

  constructor( private serviceDownload: DownloadService,
    private saveChangeservice: SaveChangeService,
    private service: ContentDeliveryServiceGalleryPage
  ) {
    this.saveChangeservice.changeEmittedString$.subscribe( change => this.getImages( change ) );
  }

  ngOnInit(): void {
    this.getImages( '*' );
  }

  private getImages( attr: string ) {
    this.unsubscription = this.service.getAllImages( attr ).subscribe( res => this.galleryContent = res.map( path => path.path ) );
  }

  ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }

  download() {

    this.downloadAnimate = !this.downloadAnimate;
    this.barAnimate = !this.barAnimate;
    this.btnArrowAnimate = !this.btnArrowAnimate;
    this.btnStopAnimate = !this.btnStopAnimate;
    this.btnDoneAnimate = !this.btnDoneAnimate;

    if ( this.downloadAnimate ) {
      setTimeout( () => {
        this.serviceDownload.downloadZip( this.galleryContent );
      }, 3000 );
    }
  }
}
