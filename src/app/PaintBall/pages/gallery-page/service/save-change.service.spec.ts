import { TestBed } from '@angular/core/testing';

import { SaveChangeService } from './save-change.service';

describe( SaveChangeService.name, () => {
  let service: SaveChangeService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( SaveChangeService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
