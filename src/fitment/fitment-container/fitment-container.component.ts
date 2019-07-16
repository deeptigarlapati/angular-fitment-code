import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// These are 3 different ways you can import actions
import * as fromStore from '../store';
// import * as vehicleAction from '../store/actions/vehicle.action';
// import { LoadYears } from '../store/actions/vehicle.action'

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {

  constructor(
    private store: Store<fromStore.FitmentState>
  ) { }

  ngOnInit() {

  }
}