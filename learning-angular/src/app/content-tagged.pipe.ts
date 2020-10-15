import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './app.component';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(games: Content[]): Content[] {
    return games.filter(g => g.genre === 'Action-RPG');
  }

}
