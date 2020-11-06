import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newMemeEvent = new EventEmitter<Content>();
  newMeme: Content;
  errorMessage: string;
  constructor() {
    this.newMeme = {
      id: 0,
      title: '',
      author: '',
      body: ''
    };
  }

  ngOnInit(): void {
    // this.newMemeEvent.emit(this.newMeme);
  }
  addTrebuchet(): void{
    const memePromise = new Promise((success, fail) => {
      // tslint:disable-next-line:max-line-length
      if (this.newMeme.id != null && this.newMeme.title !== '' && this.newMeme.author !== '' && this.newMeme.body !== ''){
        success(this.newMeme.title);
      }else{
        fail('It Failed');
      }
    });
    memePromise.then((successResult: string) => {
      console.log('Success! ', successResult);
      console.log('Event Emitted!', this.newMeme.title);
      this.newMeme.id = +this.newMeme.id;
      this.newMemeEvent.emit(this.newMeme);
      this.errorMessage = '<div></div>';
    }).catch((failResult: string) => {
      this.errorMessage = '<div>You did not enter all required fields</div>';
      console.log('Fail ', failResult);
    });
    // this.newMeme.id = 0;
    // this.newMeme.title = '';
    // this.newMeme.body = '';
    // this.newMeme.author = '';
    // this.newMeme.type = '';
    // this.newMeme.imgUrl = '';
  }

}
