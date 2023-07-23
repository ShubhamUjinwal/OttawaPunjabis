import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideshareFormComponent } from './rideshare-form.component';

describe('RideshareFormComponent', () => {
  let component: RideshareFormComponent;
  let fixture: ComponentFixture<RideshareFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideshareFormComponent]
    });
    fixture = TestBed.createComponent(RideshareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
