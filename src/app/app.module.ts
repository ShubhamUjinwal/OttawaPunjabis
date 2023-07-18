import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { FooterComponent } from './footer/footer.component';
import { PostCardComponent } from './board/post-card/post-card.component';
import { RideshareListComponent } from './board/rideshare-list/rideshare-list.component';
import { AccommodationListComponent } from './board/accommodation-list/accommodation-list.component';
import { JobsListComponent } from './board/jobs-list/jobs-list.component';
import { RideshareItemComponent } from './board/rideshare-list/rideshare-item/rideshare-item.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePostComponent,
    HomeComponent,
    BoardComponent,
    FooterComponent,
    PostCardComponent,
    RideshareListComponent,
    AccommodationListComponent,
    JobsListComponent,
    RideshareItemComponent
  ],
  imports: [
    BrowserModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
