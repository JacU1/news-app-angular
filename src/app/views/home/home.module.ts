import { CoreModule } from './../../core/core.module';
import { MainNewsComponent } from './components/dumb_components/main-news/main-news.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeComponent } from './home.component';
import { PageCarouselComponent } from './components/dumb_components/page-carousel/page-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    MainNewsComponent,
    PageCarouselComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
  ],
  exports: [MainNewsComponent, PageCarouselComponent],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
