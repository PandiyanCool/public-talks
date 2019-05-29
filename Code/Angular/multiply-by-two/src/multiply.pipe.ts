import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'multiplyPipe'
})
@Injectable()
export class MultiplyPipe implements PipeTransform {
  transform(value: any, args: any[] = null): number {
    return value * 2;
  }
}
