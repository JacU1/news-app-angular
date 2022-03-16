import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { PageSidebarComponent } from './components/page-sidebar/page-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FirstRowNewsComponent } from './components/first-row-news/first-row-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageContentComponent,
    PageSidebarComponent,
    FirstRowNewsComponent,
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
