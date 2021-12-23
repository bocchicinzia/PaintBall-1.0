import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../components/ui-component/card/card.class';
import { map } from 'rxjs/operators';
import { TestModel } from '../pages/home-pages/testModel.model';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryService {
  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  getAnyContent( projectId: string ): Observable<TestModel> {
    return this.http.get<TestModel>( this.url + projectId ).pipe(
      map( res => {
        return this.contentMapper( res );
      } )
    );
  }

  contentMapper( json: any ) {
    return new TestModel( json );
  }
}
