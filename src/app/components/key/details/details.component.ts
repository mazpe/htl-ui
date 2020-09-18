import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/services/key.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-key-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class KeyDetailsComponent implements OnInit {
  currentKey = null;
  message = '';

  constructor(
    private keyService: KeyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getKey(this.route.snapshot.paramMap.get('id'));
  }

  getKey(id): void {
    this.keyService.get(id)
      .subscribe(
        response => {
          this.currentKey = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentKey.title,
      description: this.currentKey.description,
      published: status
    };

    this.keyService.update(this.currentKey.id, data)
      .subscribe(
        response => {
          this.currentKey.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateKey(): void {
    this.keyService.update(this.currentKey.id, this.currentKey)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The key was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteKey(): void {
    this.keyService.delete(this.currentKey.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/keys']);
        },
        error => {
          console.log(error);
        });
  }
}
