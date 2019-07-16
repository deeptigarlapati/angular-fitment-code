import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FitmentYearComponent } from "./fitment-year/fitment-year.component";
import { FitmentTrimComponent } from "./fitment-trim/fitment-trim.component";
import { FitmentOptionsComponent } from "./fitment-options/fitment-options.component";
import { FitmentModelComponent } from "./fitment-model/fitment-model.component";
import { FitmentMakeComponent } from "./fitment-make/fitment-make.component";


const routes: Routes = [
  { path: '', component: FitmentYearComponent },
  { path: 'year', component: FitmentYearComponent },
  { path: 'trim', component: FitmentTrimComponent },
  { path: 'options', component: FitmentOptionsComponent },
  { path: 'model', component: FitmentModelComponent },
  { path: 'make', component: FitmentMakeComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FitmentRoutingModule {

}