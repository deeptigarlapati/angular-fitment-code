import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from './store'

import { FitmentRoutingModule } from './fitment-routing.module';

import { FitmentService}  from './services/fitment.service';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { FitmentYearComponent } from './fitment-year/fitment-year.component';
import { FitmentMakeComponent } from './fitment-make/fitment-make.component';
import { FitmentModelComponent } from './fitment-model/fitment-model.component';
import { FitmentOptionsComponent } from './fitment-options/fitment-options.component';
import { FitmentWizardComponent } from './fitment-wizard/fitment-wizard.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {APP_BASE_HREF} from '@angular/common';
import { FitmentTrimComponent } from './fitment-trim/fitment-trim.component';

@NgModule({
  imports: [
    CommonModule,
    FitmentRoutingModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forFeature(effects),
    FlexLayoutModule
  ],
  declarations: [FitmentContainerComponent, FitmentYearComponent, FitmentMakeComponent,
     FitmentModelComponent, FitmentOptionsComponent, FitmentWizardComponent, FitmentTrimComponent],
  providers: [FitmentService, {provide: APP_BASE_HREF, useValue: '/'}],
  exports: [FitmentContainerComponent]
})
export class FitmentModule { }