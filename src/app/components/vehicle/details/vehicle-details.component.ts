import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  currentVehicle = null;
  message = '';

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVehicle(this.route.snapshot.paramMap.get('id'));
  }

  getVehicle(id): void {
    this.vehicleService.get(id)
      .subscribe(
        response => {
          this.currentVehicle = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentVehicle.title,
      description: this.currentVehicle.description,
      published: status
    };

    this.vehicleService.update(this.currentVehicle.id, data)
      .subscribe(
        response => {
          this.currentVehicle.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateVehicle(): void {
    this.vehicleService.update(this.currentVehicle.id, this.currentVehicle)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The vehicle was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVehicle(): void {
    this.vehicleService.delete(this.currentVehicle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/vehicles']);
        },
        error => {
          console.log(error);
        });
  }
}
