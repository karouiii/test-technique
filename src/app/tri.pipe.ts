import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(array: any, sortBy: string, order?: any): any[] {
    const sortOrder = order ? order : 'asc';
   
     return orderBy(array, [sortBy], [sortOrder]);
  }

}
