import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailComponent } from './master-detail.component';

describe( MasterDetailComponent.name, () => {
  let component: MasterDetailComponent;
  let fixture: ComponentFixture<MasterDetailComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [MasterDetailComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( MasterDetailComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
