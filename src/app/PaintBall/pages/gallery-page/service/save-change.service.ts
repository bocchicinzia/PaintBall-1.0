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
    if ( typeof change === 'boolean' )
      this.emitChangeSource.next( change );
    else
      this.emitChangeSourceString.next( change );
  }

}
