import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeQuote'
})
export class TimeQuotePipe implements PipeTransform {

  transform(value: any): number {
    return null;
  }

}
