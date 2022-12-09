import { Subject } from 'rxjs';
import { LoadingSpinnerService } from './services/loading-spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  public isLoading: Subject<boolean> = this.loadingSpinnerService.isLoading;

  constructor(private readonly loadingSpinnerService: LoadingSpinnerService) { }

  ngOnInit(): void {
    console.log("Working");
  }

}
