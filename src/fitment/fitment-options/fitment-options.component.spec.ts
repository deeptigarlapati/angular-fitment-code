import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentOptionsComponent } from './fitment-options.component';

describe('FitmentOptionsComponent', () => {
  let component: FitmentOptionsComponent;
  let fixture: ComponentFixture<FitmentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
