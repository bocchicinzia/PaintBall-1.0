import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { forkJoin } from 'rxjs';
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
      const url = URL.createObjectURL( val );
      this.downloadUrl( url, 'image.png' );
      URL.revokeObjectURL( url );
    } );
  }

  getRequests: any[];

  downloadZip( images: string[] ) {
    this.getRequests = [];
    this.createGetRequets( images );

    forkJoin( ...this.getRequests ).subscribe( ( res ) => {
      const zip = new JSZip();

      res.forEach( ( f: any, i: any ) => {
        zip.file( `image ${i}.png`, f );
      } );

      zip.generateAsync( { type: 'blob' } )
        .then( blob => saveAs( blob, 'images.zip' ) );
    } );
  }

  private createGetRequets( data: string[] ) {
    data.forEach( url => this.getRequests.push( this.http.get( url, { responseType: 'blob' } ) ) );
  }

}
