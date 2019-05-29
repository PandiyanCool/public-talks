import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarMoney'
})
export class DollarMoneyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('triggered')
    return `$ ${value}`;
  }
}
