import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
