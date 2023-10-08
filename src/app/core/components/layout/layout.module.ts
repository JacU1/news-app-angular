import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from './../../../views/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { PageNotFoundModule } from 'src/app/views/page-not-found/page-not-found.module';
import { SignUpModule } from 'src/app/views/sign-up/sign-up.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LoginModule,
    PageNotFoundModule,
    SignUpModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    NavbarComponent,
  ]
})
export class LayoutModule { }
