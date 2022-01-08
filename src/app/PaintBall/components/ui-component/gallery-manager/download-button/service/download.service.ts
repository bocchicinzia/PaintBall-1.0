import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
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

  downloadSingleImage( urlImage: string ) {
    this.http.get( urlImage, { responseType: 'blob' } ).subscribe( val => {
      console.log( val );
      const url = URL.createObjectURL( val );
      this.downloadUrl( url, 'image.png' );
      URL.revokeObjectURL( url );
    } );
  }


  downloadAllImages( urlImage: string[] ) {
    let count = 0;
    const zip = new JSZip();
    let img = zip.folder( 'images' );
    urlImage.forEach( ( url ) => {
      console.log( url );
      const fileName = `image ${count}.png`;
      img?.file( fileName, url, { base64: false } );
      count++;
    } )

    zip.generateAsync( { type: 'blob' } ).then( ( content ) => {
      saveAs( content, 'images.zip' )
    } )
  }
}
