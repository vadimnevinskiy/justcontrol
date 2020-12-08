import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(data, search: string = '') {
    if (!search.trim()) {
      return data;
    }
    return data.filter(d => {
      for (const row of d) {
          if (row.toString().includes(search)) {
          return row;
        }
      }
    });
  }
}
