import { Component } from '@angular/core';
import {LogUpdateService} from "./services/log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
  constructor(private logService: LogUpdateService) {
  }
}
