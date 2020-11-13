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
    this.contentService.getContentObs().subscribe(memelist => this.contentList = memelist);
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
