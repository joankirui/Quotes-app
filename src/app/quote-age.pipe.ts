import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteAge'
})
export class QuoteAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
