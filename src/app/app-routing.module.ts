import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './components/vehicle/list/vehicles-list.component';
import { VehicleDetailsComponent } from './components/vehicle/details/vehicle-details.component';
import { VehicleAddComponent } from './components/vehicle/add/vehicle-add.component';
import { KeyListComponent } from './components/key/list/list.component';
import { KeyDetailsComponent } from './components/key/details/details.component';
import { KeyAddComponent } from './components/key/add/add.component';
import { TechnicianListComponent } from './components/technician/list/list.component';
import { TechnicianDetailsComponent } from './components/technician/details/details.component';
import { TechnicianAddComponent } from './components/technician/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicles/add', component: VehicleAddComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent },
  { path: 'keys', component: KeyListComponent },
  { path: 'keys/add', component: KeyAddComponent },
  { path: 'keys/:id', component: KeyDetailsComponent },
  { path: 'technicians', component: TechnicianListComponent },
  { path: 'technicians/add', component: TechnicianAddComponent },
  { path: 'technicians/:id', component: TechnicianDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
