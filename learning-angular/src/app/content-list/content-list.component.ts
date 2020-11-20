import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentList = [];
    this.getMemesList();
  }
  getMemesList(): void{
    this.contentService.getContentObs().subscribe(m1 => {
      this.contentList = m1;
    });
  }
  addMemeToList(newMemeFromChild: Content): void{
    this.contentList.push(newMemeFromChild);
    this.contentList = Object.assign([], this.contentList);
  }
  updateList(message: string): void{
    console.log(message);
    this.getMemesList();
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
}
