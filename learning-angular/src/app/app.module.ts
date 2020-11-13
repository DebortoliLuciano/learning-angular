import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchTypePipe } from './search-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    SearchTypePipe,
    HoverStyleDirective,
    AppMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
