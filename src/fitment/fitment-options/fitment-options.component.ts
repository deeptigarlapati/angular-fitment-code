import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Location } from '@angular/common';
import { LoadModelsRequestParams } from '../models/LoadModelsRequestParams.model';
import { LoadOptionsRequestParams } from '../models/LoadOptionsRequestParams.model';

@Component({
  selector: 'app-fitment-options',
  templateUrl: './fitment-options.component.html',
  styleUrls: ['./fitment-options.component.css']
})
export class FitmentOptionsComponent implements OnInit {

  options$: Observable<any>;
  year: string;
  make: string;
  model: string;
  trim: string;
  option: string;

  constructor(private location: Location,
    private store: Store<fromStore.FitmentState>,
    private router: Router) { }

  ngOnInit() {

    this.store
      .select(fromStore.getWizardState)
      .subscribe(result => {
        this.year = result.year;
        this.make = result.make;
        this.model = result.model;
        this.trim = result.trim;
        this.option = result.options;
      });

    this.store.dispatch(new fromStore
      .LoadOptions(new LoadOptionsRequestParams(
        this.year,
        this.make,
        this.model,
        this.trim)));
    this.options$ = this.store.select(fromStore.getAllOptions);
  }

  previous = () => {
    this.router.navigate(["/trim"], { skipLocationChange: true });
  }

  goToCheckout = (option: string) => {
    this.option = option;

    //save current selected model to the store and navigate to different view
    this.store.dispatch(new fromStore.SaveSelectedOptions(option));

    console.log(`Navigating to Checkout page for year: ${this.year},
     make: ${this.make}, model: ${this.model}, trim: ${this.trim} option: ${this.trim}`)

    this.router.navigate(['/'], { skipLocationChange: true })
  }

}
