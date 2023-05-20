import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingSpinnerService {

  public isLoading$ = new Subject<boolean>();

  constructor() {}

  public showSpinner(): void {
    this.isLoading$.next(true);
  }

  public hideSpinner(): void {
    this.isLoading$.next(false);
  }

}
