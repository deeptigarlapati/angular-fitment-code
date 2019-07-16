import { Action } from '@ngrx/store';
// import model/interface for payload here...

import { LoadModelsRequestParams } from "../../models/LoadModelsRequestParams.model"
import { LoadTrimsRequestParams } from 'src/fitment/models/LoadTrimsRequestParams.model';
import { LoadOptionsRequestParams } from 'src/fitment/models/LoadOptionsRequestParams.model';

// Action constants
export const LOAD_YEARS = '[Fitment] Load Years';
export const LOAD_YEARS_FAIL = '[Fitment] Load Years Fail';
export const LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success';

// Vehicle Make
export const LOAD_MAKES = '[Fitment] Load Makes';
export const LOAD_MAKES_FAIL = '[Fitment] Load Makes Fail';
export const LOAD_MAKES_SUCCESS = '[Fitment] Load Makes Success';

// Vehicle Model
export const LOAD_MODELS = '[Fitment] Load Models';
export const LOAD_MODELS_FAIL = '[Fitment] Load Models Fail';
export const LOAD_MODELS_SUCCESS = '[Fitment] Load Models Success';


// Vehicle Trim
export const LOAD_TRIMS = '[Fitment] Load Trims';
export const LOAD_TRIMS_FAIL = '[Fitment] Load Trims Fail';
export const LOAD_TRIMS_SUCCESS = '[Fitment] Load Trims Success';


// Vehicle Options
export const LOAD_OPTIONS = '[Fitment] Load Options';
export const LOAD_OPTIONS_FAIL = '[Fitment] Load Options Fail';
export const LOAD_OPTIONS_SUCCESS = '[Fitment] Load Options Success';

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any){};
}
export class LoadYearsSuccess implements Action{
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: any){}; 
}

// Actions for vehicle makes
export class LoadMakes implements Action {
  readonly type = LOAD_MAKES;
  constructor(public year: string){ };
}
export class LoadMakesFail implements Action {
  readonly type = LOAD_MAKES_FAIL;
  constructor(public payload: any) { };
}
export class LoadMakesSuccess implements Action{
  readonly type = LOAD_MAKES_SUCCESS;
  constructor(public payload: any){}; 
}

// Actions for vehicle models
export class LoadModels implements Action {
  readonly type = LOAD_MODELS;
  constructor(public params: LoadModelsRequestParams){ };
}
export class LoadModelsFail implements Action {
  readonly type = LOAD_MODELS_FAIL;
  constructor(public payload: any) { };
}
export class LoadModelsSuccess implements Action{
  readonly type = LOAD_MODELS_SUCCESS;
  constructor(public payload: any){}; 
}

// Actions for vehicle trims
export class LoadTrims implements Action {
  readonly type = LOAD_TRIMS;
  constructor(public params: LoadTrimsRequestParams){ };
}
export class LoadTrimsFail implements Action {
  readonly type = LOAD_TRIMS_FAIL;
  constructor(public payload: any) { };
}
export class LoadTrimsSuccess implements Action{
  readonly type = LOAD_TRIMS_SUCCESS;
  constructor(public payload: any){};  
}

// Actions for vehicle options
export class LoadOptions implements Action {
  readonly type = LOAD_OPTIONS;
  constructor(public params: LoadOptionsRequestParams){ };
}
export class LoadOptionsFail implements Action {
  readonly type = LOAD_OPTIONS_FAIL;
  constructor(public payload: any) { };
}
export class LoadOptionsSuccess implements Action{
  readonly type = LOAD_OPTIONS_SUCCESS;
  constructor(public payload: any){};  
}

// Action types
export type VehicleAction 
  = LoadYears | LoadYearsFail | LoadYearsSuccess 
  | LoadMakes | LoadMakesFail | LoadMakesSuccess
  | LoadModels | LoadModelsFail | LoadModelsSuccess
  | LoadTrims | LoadTrimsFail | LoadTrimsSuccess
  | LoadOptions | LoadOptionsFail | LoadOptionsSuccess
  ;