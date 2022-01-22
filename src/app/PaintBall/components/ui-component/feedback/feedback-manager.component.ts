import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { ContentMapper } from 'src/app/PaintBall/services/content-mapper.interface';
import { FormFeedback } from './feedback.class';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component( {
  selector: 'app-feedback',
  templateUrl: './feedback-manager.component.html',
  styleUrls: ['./feedback-manager.component.scss']
} )
export class FeedbackManagerComponent implements OnInit, ContentMapper<ContactsPageModel> {
  inputContent: Observable<ContactsPageModel>
  textAreaContent: Observable<ContactsPageModel>
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

  constructor( private db: AngularFireDatabase,
    private modal: MatDialog,
    private deliveryService: ContentDeliveryService,
    private saveChange: SaveChangeService ) {

    this.saveChange.changeEmittedString$.subscribe( res => this.formFeedback = res );

    this.feedback = db.list( 'feedback' ).valueChanges();
    this.feedback.subscribe( res => this.feedbackLength = res.length );
    this.feedback.subscribe( res => {
      this.arrayReverse = res.reverse();
      this.pageSlice = this.arrayReverse.slice( 0, 3 ).reverse();
      if ( !this.pageSlice.length )
        this.noCommentYet = true;
    } );
  }

  map( json: any, className: string ) {
    return new ContactsPageModel( json, className );
  }

  ngOnInit(): void {
    this.inputContent = this.deliveryService.get( 'feedback-form', 'feedback-form-input', this );
    this.textAreaContent = this.deliveryService.get( 'feedback-form', 'feedback-form-text-area', this )
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
}
