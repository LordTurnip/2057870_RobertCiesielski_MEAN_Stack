import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Fancy'
})
export class Fancy implements PipeTransform {
  transform(value: any) {
    return JSON.stringify(value, null, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }
}
