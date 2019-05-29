/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoComponent }  from 'multiply-by-two';

@Component({
  selector: 'app',
  template: `<demo-component></demo-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [DemoComponent ],
  declarations: [DemoComponent ],
  imports: [ BrowserModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
