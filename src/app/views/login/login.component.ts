import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/components/shared/services/auth/auth-service';
import { NotificationBoxService } from 'src/app/components/shared/services/notification-box/notification-box.service';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginFormGroup = this.fb.group({
    loginName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(25)]),
    rememberMeCheckBox: new FormControl(false)
  });

  constructor(private readonly fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document,
    private readonly _notificationService: NotificationBoxService,
    private readonly _router: Router, 
    private readonly _authService: AuthService) {}

  public ngOnInit(): void {
    this._document.body.classList.add('black-background');
  }

  public ngOnDestroy(): void {
    this._document.body.classList.remove('bodybg-color');
  }

  public onLoginClick(): void {
    this._authService.loginUser(this.loginFormGroup).pipe(catchError(err => {
      const errMessage = err.error.errors ? err.error.errors.Email[0] : err.error.errorMessage;
      this._notificationService.showNotificationBox(NotificationTypes.DANGER, errMessage);
      return EMPTY;
    })).subscribe(auth => {
      this._notificationService.showNotificationBox(NotificationTypes.SUCCES, "Login successful !");
      localStorage.setItem("token", auth.token);
      this._authService.userLoggedIn = true;
      this._router.navigate(["app/home"]);
    });
  }
}
