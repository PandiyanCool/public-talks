import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { SampleDirective } from './sample.directive';
import { MultiplyPipe } from './multiply.pipe';
import { SampleService } from './sample.service';

export * from './demo.component';
export * from './sample.directive';
export * from './multiply.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DemoComponent,
    SampleDirective,
    MultiplyPipe
  ],
  exports: [
    DemoComponent,
    SampleDirective,
    MultiplyPipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
