import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class DownloadService {

  constructor( private http: HttpClient ) {}

  private downloadUrl( url: string, fileName: string ) {
    const a: any = document.createElement( 'a' );
    a.href = url;
    a.download = fileName;
    document.body.appendChild( a );
    a.style = 'display: none';
    a.click();
    a.remove();
  };

  download( urlImage: string ) {
    this.http.get( urlImage, { responseType: 'blob' } ).subscribe( val => {
      console.log( val );
      const url = URL.createObjectURL( val );
      this.downloadUrl( url, 'image.png' );
      URL.revokeObjectURL( url );
    } );
  }
}
