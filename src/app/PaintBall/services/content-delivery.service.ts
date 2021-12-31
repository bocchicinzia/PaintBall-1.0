import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomePageModel } from '../pages/home-page/home-page.model';
import { PricePageModel } from '../pages/price-page/price-page.model';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryService {
  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  //home page
  getAllContentHomePage( projectId: string, className: string ): Observable<HomePageModel> {
    return this.http.get<HomePageModel>( this.url + projectId ).pipe(
      map( res => {
        return this.contentMapperHomePage( res, className );
      } )
    );
  }

  private contentMapperHomePage( json: any, className: string ) {
    return new HomePageModel( json, className );
  }


  //price page
  getAllContentPricePage( projectId: string, className: string ): Observable<PricePageModel> {
    return this.http.get<PricePageModel>( this.url + projectId ).pipe(
      map( res => {
        return this.contentMapperPricePage( res, className );
      } )
    );
  }

  private contentMapperPricePage( json: any, className: string ) {
    return new PricePageModel( json, className );
  }
}
