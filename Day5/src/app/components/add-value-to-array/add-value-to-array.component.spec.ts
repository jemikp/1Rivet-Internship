import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueToArrayComponent } from './add-value-to-array.component';

describe('AddValueToArrayComponent', () => {
  let component: AddValueToArrayComponent;
  let fixture: ComponentFixture<AddValueToArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddValueToArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueToArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
