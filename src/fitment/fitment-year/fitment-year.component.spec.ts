import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentYearComponent } from './fitment-year.component';

describe('FitmentYearComponent', () => {
  let component: FitmentYearComponent;
  let fixture: ComponentFixture<FitmentYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
