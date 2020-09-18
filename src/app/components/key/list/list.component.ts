import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/services/key.service';

@Component({
  selector: 'app-keys-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class KeyListComponent implements OnInit {

  keys: any;
  currentKey = null;
  currentIndex = -1;
  title = '';

  constructor(private keyService: KeyService) { }

  ngOnInit(): void {
    this.retrieveKeys();
  }

  retrieveKeys(): void {
    this.keyService.getAll()
      .subscribe(
        response => {
          this.keys = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveKeys();
    this.currentKey = null;
    this.currentIndex = -1;
  }

  setActiveKey(key, index): void {
    this.currentKey = key;
    this.currentIndex = index;
  }

  removeAllKeys(): void {
    this.keyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveKeys();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.keyService.findByTitle(this.title)
      .subscribe(
        data => {
          this.keys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
