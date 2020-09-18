import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import {ActivatedRoute, Router} from "@angular/router";
import {VehicleService} from "../../../services/vehicle.service";
import {KeyService} from "../../../services/key.service";
import {TechnicianService} from "../../../services/technician.service";

@Component({
  selector: 'app-order-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class OrderAddComponent implements OnInit {
  order = {
    vehicle_id: '',
    key_id: '',
    technician_id: '',
    note: '',
    status: ''
  };
  submitted = false;

  vehiclesList: any;
  keysList: any;
  techniciansList: any;

  constructor(
    private orderService: OrderService,
    private vehicleService: VehicleService,
    private keyService: KeyService,
    private technicianService: TechnicianService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(response => {
        this.vehiclesList = response.data
      });
    this.technicianService.getAll().subscribe(response => {
      this.techniciansList = response.data
    });
  }

  saveOrder(): void {
    const data = {
      vehicle_id: this.order.vehicle_id,
      key_id: this.order.key_id,
      technician_id: this.order.technician_id,
      note: this.order.note,
      status: this.order.status,
    };

    this.orderService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/orders']);
        },
        error => {
          console.log(error);
        });
  }

  newOrder(): void {
    this.submitted = false;
    this.order = {
      vehicle_id: '',
      key_id: '',
      technician_id: '',
      note: '',
      status: ''
    };
  }

  triggerVehicleKeys(id): void {
    this.vehicleService.getKeys(id).subscribe(response => {
      this.keysList = response.data
    });
  }

}
