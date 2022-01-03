import { Injectable } from '@angular/core';
import { GalleryManager } from '../gallery-manager.class';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryServiceGalleryPage {
  getImg: GalleryManager[];

  constructor() {}



  images( urls: any ): GalleryManager[] {
    this.getImg = urls.map( ( res: any ) => <GalleryManager>{
      path: res.path
    } );
    return this.getImg;
  }

  id( urls: any ): string[] {
    let objId = urls.map( ( res: any ) => <GalleryManager>{
      id: res.id
    } );
    let stringId = objId.map( ( el: any ) => { return el.id } );
    return stringId;
  }

}
