import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  attr: string = '*';

  constructor( private el: ElementRef,
    private service: ContentDeliveryServiceGalleryPage,
    private SaveChangeservice: SaveChangeService ) {
    SaveChangeservice.changeEmittedString$.subscribe( change => this.getImages( change ) );
  }

  ngOnInit(): void {
    this.getImages( this.attr );
  }

  showImg( indexImage: number ) {
    this.SaveChangeservice.emitChange( indexImage );
    this.SaveChangeservice.emitChange( true );
  }



  getImages( attr: string ) {
    this.animation();
    setTimeout( () => {
      this.getImg = this.service.getAllImages( attr );
    }, 1000 );
  }


  private animation() {
    let animation = this.el.nativeElement.querySelectorAll( '.item' );
    for ( let i = 0; i < animation.length; i++ ) {
      animation[i].classList.remove( 'animate__jackInTheBox' );
      animation[i].classList.remove( 'animate__hinge' );
      animation[i].classList.add( 'animate__hinge' );
    }
  }
}
