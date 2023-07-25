import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationFormComponent } from './accommodation-form.component';

describe('AccommodationFormComponent', () => {
  let component: AccommodationFormComponent;
  let fixture: ComponentFixture<AccommodationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationFormComponent]
    });
    fixture = TestBed.createComponent(AccommodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
