import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { SaveChangeService } from 'src/app/PaintBall/pages/gallery-page/service/save-change.service';

@Component( {
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
} )
export class FormComponent implements OnInit {
  @Input() sendOk: boolean;
  @Input() inputContent: Observable<ContactsPageModel>;
  @Input() textAreaContent: Observable<any>;
  @Output() valueFeedbackStar = new EventEmitter();

  characterLength: number;
  formFeedback = new FormGroup( {
    name: new FormControl( '', [Validators.required] ),
    email: new FormControl( '', [Validators.required, Validators.email] ),
    message: new FormControl( '', [Validators.required, Validators.maxLength( 200 ), Validators.minLength( 50 )] ),
    dateTime: new FormControl( '' ),
    star: new FormControl( '' )
  } );
  constructor( private saveChange: SaveChangeService ) {
    this.saveChange.emitChange( this.formFeedback );
  }

  ngOnInit(): void {
    this.formFeedback.get( 'star' )?.addValidators( Validators.required );
  }

  errorMessage( e: any ) {
    this.characterLength = e.target.value.length;
  }

  valueStar( e: any ) {
    this.formFeedback.get( 'star' )?.clearValidators();
    this.formFeedback.get( 'star' )?.updateValueAndValidity();
    this.valueFeedbackStar.emit( e );
  }
}
