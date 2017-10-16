import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap/rating';

import { AppComponent } from './component.app';
import { ArtistItemComponent } from './component.artist-item';
import { ArtistDetailsComponent } from './component.artist-details';
//import { navTabsetPills } from './component.nav-tab';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule, NgbModule.forRoot()
  ],
  declarations: [
    AppComponent, ArtistItemComponent, ArtistDetailsComponent, SearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}