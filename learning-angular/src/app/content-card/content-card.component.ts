import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  contentList: ContentList;
  outputHtml: string;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.addContent({
      id: 0,
      author: 'Luciano DeBortoli',
      title: 'Number 1',
      body: 'This is a body'
    });
    this.contentList.addContent({
      id: 1,
      author: 'Luciano DeBortoli',
      title: 'Number 2',
      body: 'This is a body'
    });
    this.contentList.addContent({
      id: 2,
      author: 'Luciano DeBortoli',
      title: 'Number 3',
      body: 'This is a body'
    });
    this.outputHtml = this.contentList.selectContent(1);
    console.log(this.contentList.arraySize());
  }

  ngOnInit(): void {
  }

}
