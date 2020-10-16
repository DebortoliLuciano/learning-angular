import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'searchType'
})
export class SearchTypePipe implements PipeTransform {

  transform(trebuchets: Content[], type: string): Content[] {
    return trebuchets.filter(t => t.type === type);
  }

}
