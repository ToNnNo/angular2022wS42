import { Pipe, PipeTransform } from '@angular/core';
import {sortOrder} from "../types/sortOrderType";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], order: sortOrder = 'ASC'): string[] {
    value.sort();

    if(order == "DESC") {
      value.reverse();
    }

    return value;
  }

}
