import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsApiService } from './services/news-API/news-api.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerService } from './components/loading-spinner/services/loading-spinner.service';
import { LoadingSpinnerInterceptor } from './services/loading-spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [ MatProgressSpinnerModule, CommonModule],
  exports: [LoadingSpinnerComponent],
  providers: [NewsApiService, LoadingSpinnerService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingSpinnerInterceptor,
      multi: true,
   }]
})
export class SharedModule { }
