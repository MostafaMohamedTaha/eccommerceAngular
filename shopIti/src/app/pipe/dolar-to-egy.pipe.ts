import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarToEgy'
})
export class DolarToEgyPipe implements PipeTransform {

  transform(value: number): number {
    return value*100;
  }

}
