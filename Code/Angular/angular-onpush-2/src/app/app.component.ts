import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  persons:Person[];
   person:Person = { name: "Tom" };
  @ViewChild("sub") sub;

  click(){
    this.person.name = "Jerry";
    
    // this.person = { name: "Jerry" };
    console.log(this.sub.person);
    
  }
}

// sub component
@Component({
  selector: 'sub-comp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
     {{person.name}}
    </div>
  `
})
export class SubComponent{
  @Input("person") 
  person:Person;
}

export interface Person{
  name:string,
}