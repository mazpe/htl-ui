import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  vehicle = {
    id: '',
    year: '',
    make: '',
    model: '',
    vin: '',
  };
  submitted = false;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  saveVehicle(): void {
    const data = {
      id: this.vehicle.id,
      year: this.vehicle.year,
      make: this.vehicle.make,
      model: this.vehicle.model,
      vin: this.vehicle.vin
    };

    this.vehicleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVehicle(): void {
    this.submitted = false;
    this.vehicle = {
      id: '',
      year: '',
      make: '',
      model: '',
      vin: ''
    };
  }

}
