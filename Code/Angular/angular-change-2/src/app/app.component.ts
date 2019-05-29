import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = 'Angular';
  exampleObject: { name: string, nickname?: string };

  constructor() {
    this.exampleObject = { name: 'sachin' };
  }

  changeProperty() {
    this.exampleObject.name = 'tendulkar';
  }

  changeObject() {
    this.exampleObject = { name: 'Sehwag', nickname: 'viru' }
  }
}
