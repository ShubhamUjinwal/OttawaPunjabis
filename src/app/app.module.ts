import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { FooterComponent } from './footer/footer.component';
import { RideshareListComponent } from './board/rideshare-list/rideshare-list.component';
import { AccommodationListComponent } from './board/accommodation-list/accommodation-list.component';
import { JobsListComponent } from './board/jobs-list/jobs-list.component';
import { RideshareItemComponent } from './board/rideshare-list/rideshare-item/rideshare-item.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { RideshareFormComponent } from './create-post/rideshare-form/rideshare-form.component';
import { AccommodationFormComponent } from './create-post/accommodation-form/accommodation-form.component';
import { JobsFormComponent } from './create-post/jobs-form/jobs-form.component';
import { JobItemComponent } from './board/jobs-list/job-item/job-item.component';
import { AccommodationItemComponent } from './board/accommodation-list/accommodation-item/accommodation-item.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  { path: 'create-post', component: CreatePostComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePostComponent,
    HomeComponent,
    BoardComponent,
    FooterComponent,
    RideshareListComponent,
    AccommodationListComponent,
    JobsListComponent,
    RideshareItemComponent,
    RideshareFormComponent,
    AccommodationFormComponent,
    JobsFormComponent,
    JobItemComponent,
    AccommodationItemComponent,
    SponsorsComponent,
  ],
  imports: [
    BrowserModule,
    DragScrollModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
