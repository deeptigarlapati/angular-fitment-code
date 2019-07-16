// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions. 
// Return new state

import * as fromVehicle from '../actions/vehicle.action';

export interface VehicleState {
  years: string[],
  models: string[],
  makes: string[],
  trims: string[],
  options: string[],
  loaded: boolean,
  loading: boolean
}

export const initialState: VehicleState = {
  years: [],
  models: [],
  makes: [],
  trims: [],
  options: [],
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {

  switch(action.type){

    case fromVehicle.LOAD_YEARS: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        years: action.payload
      }
    }

    // Make
    case fromVehicle.LOAD_MAKES: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_MAKES_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        makes: action.payload
      }
    }

    // Model
    case fromVehicle.LOAD_MODELS: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_MODELS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_MODELS_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        models: action.payload
      }
    }

    // Trim
    case fromVehicle.LOAD_TRIMS: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_TRIMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_TRIMS_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        trims: action.payload
      }
    }

    // Options
    case fromVehicle.LOAD_OPTIONS: {
      console.log(action.type);
      return {
        ...state,
        loading: true
      }
    }
    case fromVehicle.LOAD_OPTIONS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case fromVehicle.LOAD_OPTIONS_SUCCESS: {
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        options: action.payload
      }
    }
  }

  return state;
}

// Creating slices of state to be used by the selectors in /reducers/index.ts.
export const getYears = (state: VehicleState) => state.years;
export const getMakes = (state: VehicleState) => state.makes;
export const getTrims = (state: VehicleState) => state.trims;
export const getModels = (state: VehicleState) => state.models;
export const getOptions = (state: VehicleState) => state.options;