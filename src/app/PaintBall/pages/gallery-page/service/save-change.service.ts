import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GalleryManager } from 'src/app/PaintBall/components/ui-component/gallery-manager/gallery-manager.class';


@Injectable( {
  providedIn: 'root'
} )
export class SaveChangeService {
  private emitChangeSource = new Subject<boolean>();
  private emitChangeSourceNumber = new Subject<number>();
  private emitChangeSourceString = new Subject<any>();

  constructor() {}

  changeEmitted$ = this.emitChangeSource.asObservable();
  changeEmittedNumber$ = this.emitChangeSourceNumber.asObservable();
  changeEmittedString$ = this.emitChangeSourceString.asObservable();

  emitChange( change: any ) {
    if ( typeof change === 'boolean' )
      this.emitChangeSource.next( change );
    else if ( typeof change === 'number' )
      this.emitChangeSourceNumber.next( change );
    else
      this.emitChangeSourceString.next( change );
  }

}
