import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component( {
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
} )
export class FormComponent implements OnInit {
  @Output() valueForm = new EventEmitter<any>();

  characterLength: number;

  formFeedback = new FormGroup( {
    name: new FormControl( '', [Validators.required] ),
    email: new FormControl( '', [Validators.required, Validators.email] ),
    message: new FormControl( '', [Validators.required, Validators.maxLength( 200 ), Validators.minLength( 50 )] ),
    dateTime: new FormControl( '' )
  } );
  constructor() {
  }

  ngOnInit(): void {
    this.valueForm.emit( this.formFeedback );
  }

  errorMessage( e: any ) {
    this.characterLength = e.target.value.length;
  }

}
