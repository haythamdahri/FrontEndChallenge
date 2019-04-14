import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from './shared/github.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import {ThousandSuffixesPipe} from './shared/thousand-suffixes.pipe';
import { RepositoryComponent } from './home/repository/repository.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ThousandSuffixesPipe,
    RepositoryComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
