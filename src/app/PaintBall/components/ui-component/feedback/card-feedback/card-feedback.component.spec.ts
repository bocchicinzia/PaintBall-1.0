import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeedbackComponent } from './card-feedback.component';

describe( CardFeedbackComponent.name, () => {
  let component: CardFeedbackComponent;
  let fixture: ComponentFixture<CardFeedbackComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [CardFeedbackComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CardFeedbackComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
