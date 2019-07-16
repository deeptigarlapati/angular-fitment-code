import * as fromWizard from '../actions/wizard.actions';

export interface WizardState {
  year: string,
  make: string,
  model: string,
  trim: string,
  options: string
}

export const initialState: WizardState = {
  year: "",
  make: "",
  model: "",
  trim: "",
  options: ""
}

export function reducer(
  state = initialState,
  action: fromWizard.WizardAction
): WizardState {

  switch(action.type){

    case fromWizard.SAVE_SELECTED_YEAR: {
      return {
        ...state,
        year: action.year,
        make: "",
        model: "",
        trim: "",
        options: ""
      }
    }
    case fromWizard.SAVE_SELECTED_MAKE: {
      return {
        ...state,
        make: action.make,
        model: "",
        trim: "",
        options: ""
      }
    }
    case fromWizard.SAVE_SELECTED_MODEL: {
      return {
        ...state,
        model: action.model,
        trim: "",
        options: ""
      }
    }

    case fromWizard.SAVE_SELECTED_TRIM: {
      return {
        ...state,
        trim: action.trim,
        options: ""
      }
    }
    case fromWizard.SAVE_SELECTED_OPTIONS: {
      return {
        ...state,
        options: action.options
      }
    }
    
  }

  return state;
}

export const getYear = (state: WizardState) => state.year;
export const getMake = (state: WizardState) => state.make;
export const getTrim = (state: WizardState) => state.trim;
export const getModel = (state: WizardState) => state.model;
export const getOptions = (state: WizardState) => state.options;