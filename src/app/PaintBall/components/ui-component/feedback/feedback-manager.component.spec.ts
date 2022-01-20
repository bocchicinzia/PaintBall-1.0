import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackManagerComponent } from './feedback-manager.component';

describe( FeedbackManagerComponent.name, () => {
  let component: FeedbackManagerComponent;
  let fixture: ComponentFixture<FeedbackManagerComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [FeedbackManagerComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( FeedbackManagerComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
