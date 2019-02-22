import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, keyword: any, filterCount:any): any {
    if (!value) {
      return;
    }

    if (!keyword.length) {
      filterCount.count = value.length;
      return value
    } else {
      let result = value.filter( (value) => {
        return this.filter(value, keyword) || null
      })
      filterCount.count = result.length;
      return result
    }
  }

  filter = (value, keyword) => {
    for (let i = 0; i < keyword.length; i++) {
      if (value.title.toLowerCase().indexOf(keyword[i].toLowerCase()) >= 0) {
        return(value);
      }
    } 
  }

}
