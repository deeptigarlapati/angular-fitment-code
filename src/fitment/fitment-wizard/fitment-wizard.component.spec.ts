import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentWizardComponent } from './fitment-wizard.component';

describe('FitmentWizardComponent', () => {
  let component: FitmentWizardComponent;
  let fixture: ComponentFixture<FitmentWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitmentWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
