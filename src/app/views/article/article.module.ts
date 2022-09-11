import { ArticleComponent } from './article.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class ArticleModule { }
