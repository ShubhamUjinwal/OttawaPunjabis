import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideshareItemComponent } from './rideshare-item.component';

describe('RideshareItemComponent', () => {
  let component: RideshareItemComponent;
  let fixture: ComponentFixture<RideshareItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideshareItemComponent]
    });
    fixture = TestBed.createComponent(RideshareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
