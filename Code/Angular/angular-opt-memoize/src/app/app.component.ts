import { Component } from '@angular/core';
import { memoize } from 'lodash-decorators';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  count = 0;

  userList = [
    {
      name: 'SPA',
      points: 850
    },
    {
      name: 'HTML',
      points: 850
    },
    {
      name: 'Angular',
      points: 850
    },
    {
      name: 'jQuery',
      points: 1123
    },
    {
      name: 'C Sharp',
      points: 85
    },
    {
      name: 'Java',
      points: 1187
    },
    {
      name: 'Javascript',
      points: 8150
    },
    {
      name: 'FORTRAN',
      points: 340
    },
    {
      name: 'F Sharp',
      points: 8150
    },
    {
      name: 'CSS',
      points: 8150
    }
  ];

  @memoize
  getTitle(x) {
    this.count++;
    console.log('called..' + this.count);
   
    if (x > 1000)
      return "expert";
    else
      return "beginner";
  }
}
