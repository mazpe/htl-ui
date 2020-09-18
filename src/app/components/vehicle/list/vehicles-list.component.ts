import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: any;
  currentVehicle = null;
  currentIndex = -1;
  title = '';

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.retrieveVehicles();
  }

  retrieveVehicles(): void {
    this.vehicleService.getAll()
      .subscribe(
        response => {
          this.vehicles = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveVehicles();
    this.currentVehicle = null;
    this.currentIndex = -1;
  }

  setActiveVehicle(vehicle, index): void {
    this.currentVehicle = vehicle;
    this.currentIndex = index;
  }

  removeAllVehicles(): void {
    this.vehicleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveVehicles();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.vehicleService.findByTitle(this.title)
      .subscribe(
        data => {
          this.vehicles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
