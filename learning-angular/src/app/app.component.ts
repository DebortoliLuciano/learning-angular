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
  id: number;
  body: string;
  type: string;
  imageUrl: string;
}

const newsArticle: Content = {
  id: 0,
  body: 'This just in! Things and stuff!',
  type: 'news',
  imageUrl: 'https://my.stclaircollege.ca/sites/student/SiteAssets/Logos/myStclairLogo.png'
};

function displayTheBody(content: Content): void{
  console.log(content.body);
}

displayTheBody(newsArticle);

