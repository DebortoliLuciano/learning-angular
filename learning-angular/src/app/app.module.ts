import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {FormsModule} from '@angular/forms';
import { DefaultTypePipe } from './default-type.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    DefaultTypePipe,
    ContentTaggedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
