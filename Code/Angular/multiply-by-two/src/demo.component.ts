import { Component } from '@angular/core';

@Component({
  selector: 'demo-component',
  template: `<h1>Welcome</h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/s4XQ2LRXqDY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
})
export class DemoComponent {

  constructor() {
  }

}
