import { ArticleComponent } from './views/article/article.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{ path: '' , component: LoginComponent}
  { 
    path: 'home', 
    component: HomeComponent },
  {
    path: 'articles', 
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
