import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fitment-make',
  templateUrl: './fitment-make.component.html',
  styleUrls: ['./fitment-make.component.css']
})
export class FitmentMakeComponent implements OnInit {

  makes$: Observable<any>;
  year: string;
  make: string;

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
      });

    this.store.dispatch(new fromStore.LoadMakes(this.year));
    this.makes$ = this.store.select(fromStore.getAllMakes);
  }

  previous = () => {
    this.router.navigate(["/year"], { skipLocationChange: true });
  }

  goToModels = (make: string) => {
    this.make = make;
    //save current selected make to the store and navigate to different view
    this.store.dispatch(new fromStore.SaveSelectedMake(make));
    console.log(`Navigating to Models page for year ${this.year} and make ${this.make} `)
    this.router.navigate(['model'], { skipLocationChange: true })
  }

}
