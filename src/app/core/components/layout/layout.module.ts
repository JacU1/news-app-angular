import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    NavbarComponent,
  ]
})
export class LayoutModule { }
