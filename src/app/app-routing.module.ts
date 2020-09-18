import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './components/vehicle/list/vehicles-list.component';
import { VehicleDetailsComponent } from './components/vehicle/details/vehicle-details.component';
import { VehicleAddComponent } from './components/vehicle/add/vehicle-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicles/add', component: VehicleAddComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
