import { TestBed } from '@angular/core/testing';

import { ContentDeliveryService } from './content-delivery.service';

describe( ContentDeliveryService.name, () => {
  let service: ContentDeliveryService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( ContentDeliveryService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
