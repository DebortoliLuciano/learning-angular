import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  awesomesauce = 'This is a header!';
  todaysDate: number;
  gamesList: Content[];
  twoWayBindingTitle: string;
  constructor() {
    this.todaysDate = Date.now();
    this.gamesList = [{
      id: 0,
      title: 'Modern Warfare 2',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This game lived for too long',
      genre: 'FPS'
    }, {
      id: 1,
      title: 'Far Cry 5',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      genre: 'FPS',
      body: 'Are we on an island again'
    }, {
      id: 2,
      title: 'Dark Souls',
      genre: 'Action RPG',
      body: 'Praise the sun!',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    }, {
      id: 3,
      title: 'Need for Speed: Heat',
      genre: 'Racer',
      body: 'Zoom Zoom',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    }, {
      id: 4,
      title: 'Super Mario 3D All Stars',
      genre: '3D Platformer',
      body: 'Time to find those weird checkered cubes in sunshine',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    }];

    /*console.log('First console log');
    setTimeout(function() {
      console.log('Second console log');
    }, 0);
    Promise.resolve().then(function() {
      console.log('Third console log');
    });*/
    console.log('Fourth console log');
    const ourPromise = new Promise((success, fail) => {
      const testPass = true;
      if (testPass){
        success('It worked!');
      }else{
        fail('it failed');
      }
    });
    ourPromise.then(successResult => console.log(successResult))
              .catch(failResult => console.log(failResult));

  }
  getContentItemTitle(index: number): string{
    return this.gamesList[index].title;
  }
  submitInput(): void {
    console.log('Testing submitting my input');
  }
}

export interface Content {
  readonly id: number;
  title: string;
  body?: string;
  genre?: string;
  imageUrl: string;
}
