import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FirstRowNewsComponent } from './components/first-row-news/first-row-news.component';
import { PageCarouselComponent } from './components/page-carousel/page-carousel.component';
import { PageLeftsideInfoComponent } from './components/page-content/page-leftside-info/page-leftside-info.component';
import { PageRightsideInfoComponent } from './components/page-content/page-rightside-info/page-rightside-info.component';
import { PageCenterInfoComponent } from './components/page-content/page-center-info/page-center-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageContentComponent,
    FirstRowNewsComponent,
    PageCarouselComponent,
    PageLeftsideInfoComponent,
    PageRightsideInfoComponent,
    PageCenterInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
