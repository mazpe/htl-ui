import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import {VehicleService} from "../../../services/vehicle.service";
import {KeyService} from "../../../services/key.service";
import {TechnicianService} from "../../../services/technician.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  currentOrder = null;
  message = '';
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
    this.message = '';
    this.getOrder(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getAll().subscribe(response => {
      this.vehiclesList = response.data
    });
    this.keyService.getAll().subscribe(response => {
      this.keysList = response.data
    });
    this.technicianService.getAll().subscribe(response => {
      this.techniciansList = response.data
    });
  }

  getOrder(id): void {
    this.orderService.get(id)
      .subscribe(
        response => {
          this.currentOrder = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateOrder(): void {
    this.orderService.update(this.currentOrder.id, this.currentOrder)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The order was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOrder(): void {
    this.orderService.delete(this.currentOrder.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/orders']);
        },
        error => {
          console.log(error);
        });
  }
}
