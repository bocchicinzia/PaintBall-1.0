import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuComponent } from './vertical-menu.component';

describe( VerticalMenuComponent.name, () => {
  let component: VerticalMenuComponent;
  let fixture: ComponentFixture<VerticalMenuComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [VerticalMenuComponent]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( VerticalMenuComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
