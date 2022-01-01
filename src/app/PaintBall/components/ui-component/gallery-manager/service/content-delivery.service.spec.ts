import { TestBed } from '@angular/core/testing';
import { ContentDeliveryServiceGalleryPage } from './content-delivery.service';


describe( ContentDeliveryServiceGalleryPage.name, () => {
  let service: ContentDeliveryServiceGalleryPage;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( ContentDeliveryServiceGalleryPage );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
