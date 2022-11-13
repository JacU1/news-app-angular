import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "./components/shared/shared.module";
import { CoreModule } from "./core/core.module";
import {LayoutModule} from "./core/components/layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './core/store/reducers/news.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    LayoutModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({news: newsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
