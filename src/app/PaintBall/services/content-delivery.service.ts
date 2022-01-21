import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentMapper } from './content-mapper.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryService {
  private url: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) {}


  get<T>( projectId: string, className: string, contentMapper: ContentMapper<T> ): Observable<T> {
    return this.http.get<T>( this.url + projectId ).pipe(
      map( res => {
        return contentMapper.map( res, className );
      } )
    )
  };

}
