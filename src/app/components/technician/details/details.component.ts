import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technician-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class TechnicianDetailsComponent implements OnInit {
  currentTechnician = null;
  message = '';

  constructor(
    private technicianService: TechnicianService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTechnician(this.route.snapshot.paramMap.get('id'));
  }

  getTechnician(id): void {
    this.technicianService.get(id)
      .subscribe(
        response => {
          this.currentTechnician = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTechnician.title,
      description: this.currentTechnician.description,
      published: status
    };

    this.technicianService.update(this.currentTechnician.id, data)
      .subscribe(
        response => {
          this.currentTechnician.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTechnician(): void {
    this.technicianService.update(this.currentTechnician.id, this.currentTechnician)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The technician was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTechnician(): void {
    this.technicianService.delete(this.currentTechnician.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/technicians']);
        },
        error => {
          console.log(error);
        });
  }
}
