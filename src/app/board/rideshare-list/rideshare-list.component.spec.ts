import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideshareListComponent } from './rideshare-list.component';

describe('RideshareListComponent', () => {
  let component: RideshareListComponent;
  let fixture: ComponentFixture<RideshareListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideshareListComponent]
    });
    fixture = TestBed.createComponent(RideshareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
