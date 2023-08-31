import { Component } from '@angular/core';
import { LoadingSpinnerService } from '../../services/loading-spinner/loading-spinner.service';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  constructor(private readonly loadingSpinnerService: LoadingSpinnerService) {}

  public isLoading$ = this.loadingSpinnerService.isLoading$;

}