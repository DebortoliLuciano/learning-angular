import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  constructor() { }

  ngOnInit(): void {
    this.contentList = [{
      id: 0,
      author: 'Luciano DeBortoli',
      imgUrl: 'https://pics.me.me/thumb_pivot-beam-counterweight-sling-frame-payload-diwhy-your-very-own-47202240.png',
      type: 'Good-Meme',
      title: 'Alex Trebuchet',
      body: 'The Great Canadian War Machine',
      tags: ['Tag1', 'Tag2']
    }, {
      id: 1,
      author: 'Luciano DeBortoli',
      imgUrl: 'https://i.redd.it/1xu0gd5aso411.png',
      type: 'Bad-Meme',
      title: 'Best War Machine',
      body: 'You cant compete',
      tags: ['Tag2', 'Tag3', 'Tag1']
    }, {
      id: 2,
      author: 'Luciano DeBortoli',
      imgUrl: 'https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/how-would-trebuchets-wear-pants.jpg',
      type: 'Good-Meme',
      title: 'Classy Trebuchet',
      body: 'Its the first way',
      tags: ['Tag1', 'Tag4', 'Tag2']
    }, {
      id: 3,
      author: 'Luciano DeBortoli',
      imgUrl: 'https://i.redd.it/c352lpq157811.jpg',
      type: 'Bad-Meme',
      title: 'Lovely',
      body: 'Just Lovely',
      tags: ['Tag3', 'Tag1']
    }, {
      id: 4,
      author: 'Luciano DeBortoli',
      type: 'Bad-Meme',
      title: 'Best Font',
      body: 'Not entirelly sure what I am supposed to be putting into these objects',
      tags: ['Tag1', 'DefaultImageTag']
    }];
  }

  onClickMe(id: number): void {
    console.log(id);
  }

  submitInput(title: string): void{
    if (this.contentList.filter(t => t.title === title).length > 0){
      console.log('There is an object with this title');
    }else{
      console.log('There are no objects with this title');
    }

  }
  addMemeToList(newMemeFromChild: Content): void{
    this.contentList.push(newMemeFromChild);
    this.contentList = Object.assign([], this.contentList);
    console.log(this.contentList);
  }
}
