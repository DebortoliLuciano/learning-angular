import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './app.component';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(game: Content, dType?: string): string {
    return game.genre ? game.genre : dType ? dType : 'RPG';
  }

}
