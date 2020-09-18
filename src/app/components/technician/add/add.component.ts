import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-technician-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class TechnicianAddComponent implements OnInit {
  technician = {
    first_name: '',
    last_name: '',
    truck_number: ''
  };
  submitted = false;

  constructor(
    private technicianService: TechnicianService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTechnician(): void {
    const data = {
      first_name: this.technician.first_name,
      last_name: this.technician.last_name,
      truck_number: this.technician.truck_number
    };

    this.technicianService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/technicians']);
        },
        error => {
          console.log(error);
        });
  }

  newTechnician(): void {
    this.submitted = false;
    this.technician = {
      first_name: '',
      last_name: '',
      truck_number: ''
    };
  }

}
