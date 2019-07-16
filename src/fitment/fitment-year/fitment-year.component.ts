import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import {Location} from '@angular/common';


@Component({
  selector: 'app-fitment-year',
  templateUrl: './fitment-year.component.html',
  styleUrls: ['./fitment-year.component.css']
})
export class FitmentYearComponent implements OnInit {

  years$: Observable<any>;

  constructor(
    private location: Location,
    private store: Store<fromStore.FitmentState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectVehicleFitment()
  }

  selectVehicleFitment(){
    this.store.dispatch(new fromStore.LoadYears());
    this.years$ = this.store.select(fromStore.getAllYears);
  }

  previous = () => {
    this.router.navigate(["/"], { skipLocationChange: true });
  }

  goToMake = (year: string) => {
    //save current state to the store and navigate to different view

    this.store.dispatch(new fromStore.SaveSelectedYear(year));

    console.log("Navigating to Make page for year " + year)
    this.router.navigate(['make'], { skipLocationChange: true })
  }

}
