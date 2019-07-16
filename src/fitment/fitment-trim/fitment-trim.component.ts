import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Location } from '@angular/common';
import { LoadTrimsRequestParams } from '../models/LoadTrimsRequestParams.model';

@Component({
  selector: 'app-fitment-trim',
  templateUrl: './fitment-trim.component.html',
  styleUrls: ['./fitment-trim.component.css']
})
export class FitmentTrimComponent implements OnInit {

  trims$: Observable<any>;

  trim: string;
  year: string;
  make: string;
  model: string;

  constructor(private location: Location,
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
        this.trim = result.trim;
      });

    this.store.dispatch(new fromStore
      .LoadTrims(new LoadTrimsRequestParams(this.year, this.make, this.model)));
    this.trims$ = this.store.select(fromStore.getAllTrims);
  }

  previous = () => {
    this.router.navigate(["/model"], { skipLocationChange: true });
  }

  goToOptions = (trim: string) => {

    this.trim = trim;

    //save current selected make to the store and navigate to different view

    this.store.dispatch(new fromStore.SaveSelectedTrim(trim));
    console.log(`Navigating to Options page for year ${this.year}, 
      make ${this.make}, model ${this.model}, trim ${this.trim} `)
    this.router.navigate(['options'], { skipLocationChange: true })
  }

}
