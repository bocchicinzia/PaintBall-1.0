import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormFeedback } from './feedback.class';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component( {
  selector: 'app-feedback',
  templateUrl: './feedback-manager.component.html',
  styleUrls: ['./feedback-manager.component.scss']
} )
export class FeedbackManagerComponent implements OnInit {

  private _pageSlice: any;

  set pageSlice( value: any ) {
    this._pageSlice = value
  }
  get pageSlice() {
    return this._pageSlice;
  }

  formFeedback: FormGroup;
  feedbackLength: number;
  arrayReverse: any[];
  noCommentYet: boolean = false;
  feedback: Observable<FormFeedback[]> | Observable<any[]>;

  constructor( private db: AngularFireDatabase, private modal: MatDialog ) {
    this.feedback = db.list( 'feedback' ).valueChanges();
    this.feedback.subscribe( res => this.feedbackLength = res.length );
    this.feedback.subscribe( res => {
      this.arrayReverse = res.reverse();
      this.pageSlice = this.arrayReverse.slice( 0, 3 ).reverse();
      if ( !this.pageSlice.length )
        this.noCommentYet = true;
    } );

  }

  ngOnInit(): void {
  }

  sendForm() {
    if ( this.formFeedback.valid ) {
      let dateTime = new Date().toLocaleString();
      const response = this.modal.open( ModalConfirmComponent );

      response.afterClosed().subscribe( result => {
        if ( result ) {
          this.formFeedback.patchValue( { dateTime: dateTime } )
          this.db.list( 'feedback' ).push( this.formFeedback.value );
          this.noCommentYet = false;
          this.formFeedback.reset();
        }
      } );
    }
  }

  valueForm( e: any ) {
    this.formFeedback = e;
  }
}
