import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable( {
  providedIn: 'root'
} )
export class SaveChangeService {
  private emitChangeSource = new Subject<any>();

  constructor() {}

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange( change: any ) {
    this.emitChangeSource.next( change );
  }

}
