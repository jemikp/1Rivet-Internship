import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFruitsComponent } from './display-fruits.component';

describe('DisplayFruitsComponent', () => {
  let component: DisplayFruitsComponent;
  let fixture: ComponentFixture<DisplayFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
