import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/services/key.service';

@Component({
  selector: 'app-key-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class KeyAddComponent implements OnInit {
  key = {
    vehicle_id: '',
    item_name: '',
    description: '',
    price: ''
  };
  submitted = false;

  constructor(private keyService: KeyService) { }

  ngOnInit(): void {
  }

  saveKey(): void {
    const data = {
      vehicle_id: this.key.vehicle_id,
      item_name: this.key.item_name,
      description: this.key.description,
      price: this.key.price
    };

    this.keyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newKey(): void {
    this.submitted = false;
    this.key = {
      vehicle_id: '',
      item_name: '',
      description: '',
      price: ''
    };
  }

}
