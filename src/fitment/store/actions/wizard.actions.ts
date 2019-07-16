import { Action } from '@ngrx/store';

// User selections
export const SAVE_SELECTED_YEAR = '[Fitment] Save Selected Year';
export const SAVE_SELECTED_MAKE = '[Fitment] Save Selected Make';
export const SAVE_SELECTED_MODEL = '[Fitment] Save Selected Model';
export const SAVE_SELECTED_TRIM = '[Fitment] Save Selected Trim';
export const SAVE_SELECTED_OPTIONS = '[Fitment] Save Selected Options';


// Save selections
export class SaveSelectedYear implements Action {
  readonly type = SAVE_SELECTED_YEAR;
  constructor(public year: string){ };
}
export class SaveSelectedMake implements Action {
  readonly type = SAVE_SELECTED_MAKE;
  constructor(public make: string) { };
}
export class SaveSelectedModel implements Action{
  readonly type = SAVE_SELECTED_MODEL;
  constructor(public model: string){};  
}

export class SaveSelectedTrim implements Action{
  readonly type = SAVE_SELECTED_TRIM;
  constructor(public trim: string){};  
}

export class SaveSelectedOptions implements Action{
  readonly type = SAVE_SELECTED_OPTIONS;
  constructor(public options: string){};  
}

// Action types
export type WizardAction 
  =  SaveSelectedYear | SaveSelectedMake | SaveSelectedModel | SaveSelectedTrim | SaveSelectedOptions
  ;