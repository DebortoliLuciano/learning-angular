import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {Content} from "../app.component";

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  newGame: Content;
  constructor() {
    this.newGame = {
      id: 0,
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }

  addGame(): void{
    this.newGameEvent.emit(this.newGame);
  }

}
