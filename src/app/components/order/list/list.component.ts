import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class OrderListComponent implements OnInit {
  orders: any;
  currentOrder = null;
  currentIndex = -1;
  title = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders(): void {
    this.orderService.getAll()
      .subscribe(
        response => {
          this.orders = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOrders();
    this.currentOrder = null;
    this.currentIndex = -1;
  }

  setActiveOrder(order, index): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }

  removeAllOrders(): void {
    this.orderService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveOrders();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.orderService.findByTitle(this.title)
      .subscribe(
        data => {
          this.orders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
