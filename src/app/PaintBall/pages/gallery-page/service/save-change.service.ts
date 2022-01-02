import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable( {
  providedIn: 'root'
} )
export class SaveChangeService {
  private emitChangeSource = new Subject<any>();
  private emitChangeSourceString = new Subject<any>();

  constructor() {}

  changeEmitted$ = this.emitChangeSource.asObservable();
  changeEmittedString$ = this.emitChangeSourceString.asObservable();

  emitChange( change: any ) {
    if ( typeof change === 'string' )
      this.emitChangeSourceString.next( change );
    else
      this.emitChangeSource.next( change );
  }

}
