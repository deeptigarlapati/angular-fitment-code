import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentMakeComponent } from './fitment-make.component';

describe('FitmentMakeComponent', () => {
  let component: FitmentMakeComponent;
  let fixture: ComponentFixture<FitmentMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
