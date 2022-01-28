import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { ContentMapper } from 'src/app/PaintBall/services/content-mapper.interface';
import { CardFeedbackFirebasePrint } from './feedback.class';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component( {
  selector: 'app-feedback',
  templateUrl: './feedback-manager.component.html',
  styleUrls: ['./feedback-manager.component.scss']
} )
export class FeedbackManagerComponent implements OnInit, ContentMapper<ContactsPageModel> {
  inputContent: Observable<ContactsPageModel>;
  textAreaContent: Observable<ContactsPageModel>;
  feedbackManager: Observable<ContactsPageModel>;

  @Output() viewGoToFeedback = new EventEmitter<boolean>();

  private _pageSlice: CardFeedbackFirebasePrint[];

  set pageSlice( value: CardFeedbackFirebasePrint[] ) {
    this._pageSlice = value
  }
  get pageSlice() {
    return this._pageSlice;
  }

  formFeedback: FormGroup;
  feedbackLength: number;
  arrayReverse: any[];
  noCommentYet: boolean = false;
  feedback: Observable<CardFeedbackFirebasePrint[]> | Observable<any[]>;
  valueStar: string;
  sendOk = false;
  animSendOk = false;

  constructor( private db: AngularFireDatabase,
    private modal: MatDialog,
    private deliveryService: ContentDeliveryService,
    private saveChange: SaveChangeService ) {

    this.feedbackManager = this.deliveryService.get( 'feedback-manager', 'feedback-manager', this );

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

  valueFeedbackStar( e: any ) {
    this.valueStar = e;
  }
  sendForm() {
    if ( this.formFeedback.valid ) {
      let dateTime = new Date().toLocaleString();
      const response = this.modal.open( ModalConfirmComponent );
      this.viewGoToFeedback.emit( false );

      response.afterClosed().subscribe( result => {
        if ( result ) {
          this.formFeedback.patchValue( { dateTime: dateTime, star: this.valueStar } )
          this.db.list( 'feedback' ).push( this.formFeedback.value );
          this.noCommentYet = false;
          this.formFeedback.reset();
          this.sendOk = true;
          this.animSendOk = true;
          setTimeout( () => {
            this.animSendOk = false
          }, 6000 );
        }
      } );
    }

  }
}
