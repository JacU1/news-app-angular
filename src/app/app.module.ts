import { HomeModule } from './views/home/home.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { SharedModule } from './components/shared/shared.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ArticleModule } from './views/article/article.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CoreModule,
    HomeModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
