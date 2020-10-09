import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  outputHtml: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
