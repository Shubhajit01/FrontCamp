import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxChars = 100): any {
    if (value) {
      return `${value.substring(0, maxChars)}.....`;
    }
    return value;
  }
}
