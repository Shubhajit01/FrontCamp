import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return `${ value.substring(0, 100) }.....`;
    }
    return value;
  }
}
