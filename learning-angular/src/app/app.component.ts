import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  awesomesauce = '<h1>This is a header!</h1>';
  gamesList: Content[];
  constructor() {
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
  }
}

export interface Content {
  readonly id: number;
  title: string;
  body?: string;
  genre: string;
  imageUrl: string;
}
