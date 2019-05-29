import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  collection;
  constructor() {
    this.collection = [
      { id: 'one' },
      { id: 'two' },
      { id: 'three' }
    ];
  }

  getItems() {
    this.collection = [
      { id: 'one' },
      { id: 'two' },
      { id: 'three' },
      { id: 'four' }
    ];
  }

  trackByFuntion(index, item) {
    return index;
  }
}
