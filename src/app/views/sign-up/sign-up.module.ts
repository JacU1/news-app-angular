import { CoreModule } from '../../core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CommonModule} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth-service';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarouselModule,
    SharedModule,
    CoreModule,
  ],
  exports: [],
  providers: [AuthService],
  bootstrap: [SignUpComponent]
})
export class SignUpModule { }
