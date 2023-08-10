import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationItemComponent } from './accommodation-item.component';

describe('AccommodationItemComponent', () => {
  let component: AccommodationItemComponent;
  let fixture: ComponentFixture<AccommodationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationItemComponent]
    });
    fixture = TestBed.createComponent(AccommodationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
