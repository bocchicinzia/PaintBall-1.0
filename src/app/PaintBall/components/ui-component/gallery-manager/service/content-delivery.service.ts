import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ButtonGallery } from '../button/button-gallery.class';
import { GalleryManager } from '../gallery-manager.class';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryServiceGalleryPage {
  getImg: GalleryManager[];
  getButton: ButtonGallery[];

  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  getAllButtonGalleryPage( projectId: string ): Observable<ButtonGallery[]> {
    return this.http.get<ButtonGallery>( this.url + projectId ).pipe(
      map( res => {
        return this.button( res );
      } )
    );
  }


  private button( urls: any ): ButtonGallery[] {
    this.getButton = urls.map( ( res: any ) => <ButtonGallery[]><unknown>{
      label: res.label,
      dataFilter: res.dataFilter,
    } );
    return this.getButton;
  }

  getAllImagesGalleryPage( projectId: string ): Observable<GalleryManager[]> {
    return this.http.get<GalleryManager>( this.url + projectId ).pipe(
      map( res => {
        return this.images( res );
      } )
    );
  }


  private images( urls: any ): GalleryManager[] {
    this.getImg = urls.map( ( res: any ) => <GalleryManager[]><unknown>{
      id: res.id,
      path: res.path,
      email: res.email,
      alt: res.alt
    } );
    return this.getImg;
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
