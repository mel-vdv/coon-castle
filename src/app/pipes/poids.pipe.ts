import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poids'
})
export class PoidsPipe implements PipeTransform {

  transform(value: [number, number, string]): string {
    let a = value[0] < 1000 ? "gr" : "kg";
    let b = !value[1] ? "nn" : value[2];
    return a + "-" + b;
  }

}
