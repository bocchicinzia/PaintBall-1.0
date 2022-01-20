import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { FormFeedback } from './feedback.class';

@Component( {
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
} )
export class FeedbackComponent implements OnInit {
  formFeedback = new FormGroup( {
    name: new FormControl( '', [Validators.required] ),
    email: new FormControl( '', [Validators.required, Validators.email] ),
    message: new FormControl( '', [Validators.required, Validators.maxLength( 200 ), Validators.minLength( 50 )] ),
    dateTime: new FormControl( '' )
  } );

  private _pageSlice: any;

  set pageSlice( value: any ) {
    this._pageSlice = value
  }
  get pageSlice() {
    return this._pageSlice;
  }

  feedbackLength: number;
  arrayReverse: any[];
  noCommentYet: boolean = false;
  feedback: Observable<FormFeedback[]> | Observable<any[]>;

  constructor( private db: AngularFireDatabase ) {
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

      this.formFeedback.patchValue( { dateTime: dateTime } )
      this.db.list( 'feedback' ).push( this.formFeedback.value );
      this.noCommentYet = false;
      this.formFeedback.reset();
    }
  }

  characterLength: number;
  errorMessage( e: any ) {
    this.characterLength = e.target.value.length;
  }
}
