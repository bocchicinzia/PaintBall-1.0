import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContactsComponent } from './tab-contacts.component';

describe('TabContactsComponent', () => {
  let component: TabContactsComponent;
  let fixture: ComponentFixture<TabContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
