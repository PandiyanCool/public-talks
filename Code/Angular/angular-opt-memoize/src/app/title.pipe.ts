import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  pure: true
})
export class TitlePipe implements PipeTransform {

  // Primitive values
  //   String
  //   NUmber
  //   Boolean

  // Object References
  //   Date
  //   Array
  //   Object


  transform(x: any, args?: any): any {
    console.log('called');


    if (x > 1000)
      return 'expert';

    return 'begineer';
  }
}