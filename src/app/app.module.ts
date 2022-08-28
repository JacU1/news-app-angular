import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstRowNewsComponent } from './views/home/components/first-row-news/first-row-news.component';
import { PageCarouselComponent } from './views/home/components/page-carousel/page-carousel.component';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstRowNewsComponent,
    PageCarouselComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
   SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
