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
    if ( attr === '*' || attr === '' ) {
      setTimeout( () => {
        this.fetchData();
        this.animation();
      }, 500 );
    } else {
      setTimeout( () => {
        this.getImg = this.filterData( this.fetchData(), attr );
        this.animation();
      }, 500 );
    }
  }

  private fetchData() {
    this.getImg = this.service.getAllContentGalleryPage( 'gallery-page' );
    return this.getImg;
  }

  private filterData( data: Observable<GalleryManager[]>, attr: string ): Observable<GalleryManager[]> {
    return data.pipe(
      map( employees =>
        employees.filter( ( { email } ) =>
          email === attr,
        ),
      ),
    );
  }

  private animation() {
    let animation = this.el.nativeElement.querySelectorAll( '.item' );

    for ( let i = 0; i < animation.length; i++ ) {
      animation[i].classList.add( 'animate__hinge' );
      animation[i].classList.remove( 'animate__jackInTheBox' );

      setTimeout( () => {
        animation[i].classList.remove( 'animate__hinge' );
        animation[i].classList.add( 'animate__jackInTheBox' );
      }, 1000 );
    }
  }
}
