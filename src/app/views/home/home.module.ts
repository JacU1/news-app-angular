import { CoreModule } from '../../core/core.module';
import { MainNewsComponent } from './components/dumb_components/main-news/main-news.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeComponent } from './home.component';
import { PageCarouselComponent } from './components/dumb_components/page-carousel/page-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";
import {NewsApiService} from "../../components/shared/services/news-API/news-api.service";
import { StoreModule } from '@ngrx/store';
import { newsReducers } from 'src/app/core/store';

@NgModule({
  declarations: [
    HomeComponent,
    MainNewsComponent,
    PageCarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    SharedModule,
    CoreModule,
    StoreModule.forFeature('homePage', newsReducers)
  ],
  exports: [],
  providers: [NewsApiService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
