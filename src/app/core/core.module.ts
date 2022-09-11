import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,
    CarouselModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
})
export class CoreModule { }
