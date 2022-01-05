import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  //------------------------------------------------------------------------
  //get input date

  getInputGalleryPage( projectId: string ): Observable<InputGallery> {
    return this.http.get<InputGallery>( this.url + projectId ).pipe(
      map( res => {
        return this.input( res );
      } )
    );
  }


  private input( urls: any ): InputGallery {
    this.getInput = urls.map( ( res: any ) => <InputGallery>{
      placeholder: res.placeholder,
      label: res.label,
      buttonValue: res.buttonValue
    } );
    return this.getInput[0];
  }

  //----------------------------------------------------------------------
  //get button

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

  //-----------------------------------------------------------------------
  //get all images

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
