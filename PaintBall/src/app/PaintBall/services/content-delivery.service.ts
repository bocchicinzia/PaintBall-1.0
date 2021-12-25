import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestModel } from '../pages/home-pages/testModel.model';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryService {
  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  getAllContent( projectId: string, className: string ): Observable<TestModel> {
    return this.http.get<TestModel>( this.url + projectId ).pipe(
      map( res => {
        return this.contentMapper( res, className );
      } )
    );
  }

  contentMapper( json: any, className: string ) {
    return new TestModel( json, className );
  }
}
