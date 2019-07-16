import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import {Location} from '@angular/common';
import { LoadModelsRequestParams } from '../models/LoadModelsRequestParams.model';

@Component({
  selector: 'app-fitment-model',
  templateUrl: './fitment-model.component.html',
  styleUrls: ['./fitment-model.component.css']
})
export class FitmentModelComponent implements OnInit {

  
  models$: Observable<any>;
  year: string;
  make: string;
  model: string;

  constructor( private location: Location,
    private store: Store<fromStore.FitmentState>,
    private router: Router) { }

  ngOnInit() {
    // get selected year from store first

    this.store
    .select(fromStore.getWizardState)
    .subscribe(result => {
      this.year = result.year;
      this.make = result.make;
      this.model = result.model;
    });

    this.store.dispatch(new fromStore
      .LoadModels(new LoadModelsRequestParams(this.year, this.make)));
    this.models$ = this.store.select(fromStore.getAllModels);
  }

  previous = () => {
    this.router.navigate(["/make"], { skipLocationChange: true });
  }

  goToTrims = (model: string) => {
    this.model = model;

    //save current selected model to the store and navigate to different view
    this.store.dispatch(new fromStore.SaveSelectedModel(model));

    console.log(`Navigating to Trims page for year: ${this.year},
     make: ${this.make}, model: ${this.model}`)

    this.router.navigate(['trim'], { skipLocationChange: true })
  }
}
