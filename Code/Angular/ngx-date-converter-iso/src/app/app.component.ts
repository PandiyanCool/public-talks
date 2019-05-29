import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isoDate = '2013-03-10T02:00:00Z';
  currentDate = new Date();
}
