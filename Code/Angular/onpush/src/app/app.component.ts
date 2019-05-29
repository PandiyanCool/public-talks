import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';


  fruits = [{
    name: 'orange',
    price: 15
  }, {
    name: 'apple',
    price: 14
  }, {
    name: 'bannana',
    price: 15
  }, {
    name: 'jackfruit',
    price: 12
  }, 
  {
    name: 'Grapes',
    price: 15
  }, {
    name: 'Green apple',
    price: 14
  }, {
    name: 'Guava',
    price: 15
  }, {
    name: 'mosambi',
    price: 12
  }];

  AddFruits(){
    this.fruits.push({
      name: 'mango',
      price: 14
    });
  }
}
