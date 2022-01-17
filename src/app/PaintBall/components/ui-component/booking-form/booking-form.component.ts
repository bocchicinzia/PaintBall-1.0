import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component( {
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
} )
export class BookingFormComponent implements OnInit {

  form = this.fb.group( {
    firstname: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }],
    phone: ['', [Validators.required, Validators.minLength( 9 ), Validators.maxLength( 10 )]],
    numGaming: ['', [Validators.required, Validators.maxLength( 2 )]],
    dateTime: ['', [Validators.required]],
    firstNameTeam: ['', [Validators.required, Validators.maxLength( 15 )]],
    secondNameTeam: ['', [Validators.required, Validators.maxLength( 15 )]],
    message: ['', [Validators.required, Validators.maxLength( 200 )]],
  } )

  constructor( private fb: FormBuilder, private http: HttpClient ) {}

  ngOnInit(): void {
  }

  send() {
    const url = 'https://script.google.com/macros/s/AKfycbwRK92v0np4Kx8kPSWjQD5RDGCdDkE2WRD7Lnv_e8_d02A6d17P5pGVt4aJrt2T5qfI/exec';
    // const content = this.form.value;
    const formObject = this.form.getRawValue();
    const serializedForm = JSON.stringify( formObject );


    fetch( url, { method: 'POST', body: serializedForm } )
      .then( response => console.log( 'Success!', response ) )
      .catch( error => console.error( 'Error!', error.message ) );

  }

}
