import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('../../../views/home/home.module').then(m => m.HomeModule)},
      { path: 'articles', loadChildren: () => import('../../../views/article/article.module').then(m => m.ArticleModule)},
      // { path: '', loadChildren: () => login here}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
