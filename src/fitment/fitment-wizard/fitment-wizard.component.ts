import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromWizard from '../store/reducers/wizard.reducer';

@Component({
  selector: 'app-fitment-wizard',
  templateUrl: './fitment-wizard.component.html',
  styleUrls: ['./fitment-wizard.component.css']
})
export class FitmentWizardComponent implements OnInit {

  year: string;
  make: string;
  model: string;
  trim: string;
  options: string;

  constructor(private store: Store<fromStore.FitmentState>) { }

  ngOnInit() {
    this.store.select(fromStore.getWizardState).subscribe( (wizardState: fromWizard.WizardState) => {
      this.year = wizardState.year;
      this.make = wizardState.make;
      this.model = wizardState.model;
      this.trim = wizardState.trim;
      this.options = wizardState.options;
    })
  }

}
