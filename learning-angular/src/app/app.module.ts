import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchTypePipe } from './search-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import {FormsModule} from "@angular/forms";
import {CreateComponentComponent, CreateComponentDialog} from './create-component/create-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    SearchTypePipe,
    HoverStyleDirective,
    AppMessagesComponent,
    CreateComponentComponent,
    CreateComponentDialog,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent},
      { path: 'content', component: ContentListComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  entryComponents: [CreateComponentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
