import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsApiService } from './services/news-API/news-api.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerInterceptor } from './interceptors/loading-spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerService } from './services/loading-spinner/loading-spinner.service';
@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [MatProgressSpinnerModule, CommonModule],
  exports: [LoadingSpinnerComponent],
  providers: [NewsApiService, LoadingSpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingSpinnerInterceptor,
      multi: true,
   }]
})
export class SharedModule { }
