import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class TechnicianListComponent implements OnInit {
  technicians: any;
  currentTechnician = null;
  currentIndex = -1;
  title = '';

  constructor(private technicianService: TechnicianService) { }

  ngOnInit(): void {
    this.retrieveTechnicians();
  }

  retrieveTechnicians(): void {
    this.technicianService.getAll()
      .subscribe(
        response => {
          this.technicians = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTechnicians();
    this.currentTechnician = null;
    this.currentIndex = -1;
  }

  setActiveTechnician(technician, index): void {
    this.currentTechnician = technician;
    this.currentIndex = index;
  }

  removeAllTechnicians(): void {
    this.technicianService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTechnicians();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.technicianService.findByTitle(this.title)
      .subscribe(
        data => {
          this.technicians = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
