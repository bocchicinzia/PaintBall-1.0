import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalleryPageModel } from 'src/app/PaintBall/pages/gallery-page/gallery-page.model';
import { ButtonGallery } from '../button/button-gallery.class';
import { GalleryManager } from '../gallery-manager.class';
import { InputGallery } from '../input/input.class';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryServiceGalleryPage {
  getImg: GalleryManager[];
  getButton: ButtonGallery[];
  getInput: InputGallery[];

  private url: string = "https://ahmedri94.github.io/paintball-json/db.json";


  constructor() {}

  private fetchGeneric( projectId: any ) {
    return from( fetch( this.url ).then( res => res.json() ).then( res => res[projectId] ) );
  }

  //------------------------------------------------------------------------
  //get input date

  getInputGalleryPage( projectId: string, className: string ): Observable<InputGallery> {
    let date = this.fetchGeneric( projectId );
    return date.pipe(
      map( res => {
        return new GalleryPageModel( res, className ).getInput[0];

      } )
    )
  }

  //----------------------------------------------------------------------
  //get button

  getAllButtonGalleryPage( projectId: string, className: string ): Observable<ButtonGallery[]> {
    let date = this.fetchGeneric( projectId );
    return date.pipe(
      map( res => {
        return new GalleryPageModel( res, className ).getButton;
      } )
    )
  }

  //-----------------------------------------------------------------------
  //get all images

  private getAllImagesGalleryPage( projectId: string ): Observable<GalleryManager[]> {
    let date = this.fetchGeneric( projectId );
    return date.pipe(
      map( res => {
        return new GalleryPageModel( res, 'all-images' ).getImg;
      } )
    )
  }


  getAllImages( attr: string ) {
    return this.filterData( this.fetchData(), attr );
  }

  private fetchData() {
    return this.getAllImagesGalleryPage( 'gallery-page' );
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
}
