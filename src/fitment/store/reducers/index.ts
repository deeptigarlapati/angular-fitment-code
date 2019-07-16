/*
    This file is a master reducer file that will create and compose state
    taking multiple reducers and building the state tree

    The role of reducers is to deal with pure state and immutable objects
*/

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVehicle from './vehicle.reducer';
import * as fromWizard from './wizard.reducer';


// Composing the parent state (FitmentState) that will encompass smaller chunks of state (vehicleState)
// This is the interface used by the reducers below.
export interface FitmentState {
  vehicle: fromVehicle.VehicleState,
  wizard: fromWizard.WizardState
}

// Assigning our reducers to the state, 
  // ActionReducerMap uses the FitmentState interface 
  // to describe what all reducers should look like and how they are composed
export const reducers: ActionReducerMap<FitmentState> = {
  vehicle: fromVehicle.reducer,
  wizard: fromWizard.reducer
}


// SELECTORS
export const getFitmentState = createFeatureSelector<FitmentState>('fitment');

export const getVehicleState = createSelector(
  getFitmentState,
  (state: FitmentState) => state.vehicle
)

export const getWizardState = createSelector(
  getFitmentState,
  (state: FitmentState) => state.wizard
)

export const getAllYears = createSelector(getVehicleState, fromVehicle.getYears);
export const getAllMakes = createSelector(getVehicleState, fromVehicle.getMakes);
export const getAllModels = createSelector(getVehicleState, fromVehicle.getModels);
export const getAllTrims = createSelector(getVehicleState, fromVehicle.getTrims);
export const getAllOptions = createSelector(getVehicleState, fromVehicle.getOptions);

export const getSelectedYear = createSelector(getWizardState, fromWizard.getYear);
export const getSelectedMake = createSelector(getWizardState, fromWizard.getMake);
export const getSelectedModel = createSelector(getWizardState, fromWizard.getModel);
export const getSelectedTrim = createSelector(getWizardState, fromWizard.getTrim);
export const getSelectedOptions = createSelector(getWizardState, fromWizard.getOptions);
