import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalleryManager } from '../gallery-manager.class';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryServiceGalleryPage {
  getImg: GalleryManager[];

  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}


  getAllContentGalleryPage( projectId: string ): Observable<GalleryManager[]> {
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
      alt: res.alt
    } );
    return this.getImg;
  }
}
