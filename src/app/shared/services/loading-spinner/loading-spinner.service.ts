import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingSpinnerService {

  public isLoading$ = new Subject<boolean>();
  public isLoadingSignal = signal(false);

  constructor() {}

  public showSpinner(): void {
    this.isLoading$.next(true);
    this.isLoadingSignal.update(() => true);
  }

  public hideSpinner(): void {
    this.isLoading$.next(false);
    this.isLoadingSignal.update(() => false);
  }

}
