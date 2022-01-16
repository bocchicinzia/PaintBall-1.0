import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowPageComponent } from './book-now-page.component';

describe('BookNowPageComponent', () => {
  let component: BookNowPageComponent;
  let fixture: ComponentFixture<BookNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
