import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VehicleAddComponent } from './components/vehicle/add/vehicle-add.component';
import { VehicleDetailsComponent } from './components/vehicle/details/vehicle-details.component';
import { VehiclesListComponent } from './components/vehicle/list/vehicles-list.component';
import { KeyAddComponent } from './components/key/add/add.component';
import { KeyDetailsComponent } from './components/key/details/details.component';
import { KeyListComponent } from './components/key/list/list.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorServices} from "./interceptor.interceptor";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    VehicleAddComponent,
    VehicleDetailsComponent,
    VehiclesListComponent,
    KeyAddComponent,
    KeyDetailsComponent,
    KeyListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServices,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
