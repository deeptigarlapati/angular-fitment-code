import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentModelComponent } from './fitment-model.component';

describe('FitmentModelComponent', () => {
  let component: FitmentModelComponent;
  let fixture: ComponentFixture<FitmentModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
