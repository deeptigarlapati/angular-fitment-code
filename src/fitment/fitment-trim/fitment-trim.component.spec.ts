import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentTrimComponent } from './fitment-trim.component';

describe('FitmentTrimComponent', () => {
  let component: FitmentTrimComponent;
  let fixture: ComponentFixture<FitmentTrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentTrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentTrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
