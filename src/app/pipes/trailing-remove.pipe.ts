import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trailingRemove'
})
export class TrailingRemovePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.replace(/\[.*\]$/, '');
    }
    return value;
  }

}
