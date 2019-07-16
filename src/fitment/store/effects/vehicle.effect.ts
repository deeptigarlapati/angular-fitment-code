import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as vehicleActions from '../actions/vehicle.action';
import * as fromServices from '../../services/fitment.service';

@Injectable()
export class VehicleEffects{
  constructor(
    private actions$: Actions,
    private fitmentService: fromServices.FitmentService
  ){

  }

  @Effect()
  loadYears$ = this.actions$.pipe(
    ofType(vehicleActions.LOAD_YEARS),
    switchMap( () => {
      return this.fitmentService.getYears().pipe(
        map(years => new vehicleActions.LoadYearsSuccess(years['year'])),
        catchError(error => of(new vehicleActions.LoadYearsFail(error)))
      )
    })
  )

  @Effect()
  loadMakes$ = this.actions$.pipe(
    ofType<vehicleActions.LoadMakes>(vehicleActions.LOAD_MAKES),
    switchMap( (action) => {
      return this.fitmentService.getMakes(action.year).pipe(
        map(makes => new vehicleActions.LoadMakesSuccess(makes['make'])),
        catchError(error => of(new vehicleActions.LoadMakesFail(error)))
      )
    })
  )

  @Effect()
  loadModels$ = this.actions$.pipe(
    ofType<vehicleActions.LoadModels>(vehicleActions.LOAD_MODELS),
    switchMap( (action) => {
      return this.fitmentService
        .getModels(action.params.year, action.params.make)
        .pipe(
          map(models => new vehicleActions.LoadModelsSuccess(models['model'])),
          catchError(error => of(new vehicleActions.LoadModelsFail(error)))
      )
    })
  )

  @Effect()
  loadTrims$ = this.actions$.pipe(
    ofType<vehicleActions.LoadTrims>(vehicleActions.LOAD_TRIMS),
    switchMap( (action) => {
      return this.fitmentService
        .getTrims(action.params.year, action.params.make, action.params.model)
        .pipe(
          map(models => new vehicleActions.LoadTrimsSuccess(models['trim'])),
          catchError(error => of(new vehicleActions.LoadTrimsFail(error)))
      )
    })
  )

  @Effect()
  loadOptions$ = this.actions$.pipe(
    ofType<vehicleActions.LoadOptions>(vehicleActions.LOAD_OPTIONS),
    switchMap( (action) => {
      return this.fitmentService
        .getOptions(action.params.year, action.params.make, action.params.model, action.params.trim)
        .pipe(
          map(options => new vehicleActions.LoadOptionsSuccess(options)),
          catchError(error => of(new vehicleActions.LoadOptionsFail(error)))
      )
    })
  )
}
