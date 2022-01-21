import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentMapper } from './content-mapper.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ContentDeliveryService {
  private url: string = "https://ahmedri94.github.io/paintball-json/db.json";

  constructor() {}

  private fetchGeneric<T>( projectId: any ) {
    return from<Promise<T>>( fetch( this.url ).then( res => res.json() ).then( res => res[projectId] ) );
  }

  get<T>( projectId: string, className: string, contentMapper: ContentMapper<T> ): Observable<T> {
    let date = this.fetchGeneric<T>( projectId );
    return date.pipe(
      map( res => {
        return contentMapper.map( res, className );
      } )
    )
  };

}
