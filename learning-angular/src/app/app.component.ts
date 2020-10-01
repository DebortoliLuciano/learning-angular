import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
}

let name: string;

name = 'Peter';


let otherName = 'Luciano';

let isTypeScriptAwesome: boolean;

isTypeScriptAwesome = false;

function doAThing(): void{
  return;
}

let somethingRandom: any;

somethingRandom = 1000;

interface Content {
  readonly id: number;
  body?: string;
  type: string;
  imageUrl: string;
}

const newsArticle: Content = {
  id: 0,
  type: 'news',
  imageUrl: 'https://my.stclaircollege.ca/sites/student/SiteAssets/Logos/myStclairLogo.png'
};

newsArticle.body = 'This is the body';


function displayTheBody(content: Content): void{
  console.log(content.body);
}

displayTheBody(newsArticle);


class ContentList {
  static contentCount = 0;
  private _items: Content[];
  constructor(item: Content) {
    this._items[0] = item;
    this.increaseCount();
  }
  get items(): Content[]{
    return this._items;
  }
  increaseCount() {
    return ++ContentList.contentCount;
  }
}

let newsListOfContent: ContentList;
newsListOfContent = new ContentList(newsArticle);
console.log(newsListOfContent.items[0]);
