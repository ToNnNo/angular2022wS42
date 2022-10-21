import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): string|null {
    if(value == undefined)
      return null;

    // [...value] = value.split('')
    return value.split('').reverse().join('');
  }

}
