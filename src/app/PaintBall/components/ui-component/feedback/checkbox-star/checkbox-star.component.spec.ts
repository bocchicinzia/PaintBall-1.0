import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxStarComponent } from './checkbox-star.component';

describe('CheckboxStarComponent', () => {
  let component: CheckboxStarComponent;
  let fixture: ComponentFixture<CheckboxStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
