import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alis',
})
export class AlisPipe implements PipeTransform {
  transform(value: string, diff: number): unknown {
    return (parseInt(value.replace(/,/, '.')) - diff)
      .toFixed(2)
      .replace(/\./, ',');
  }
}
