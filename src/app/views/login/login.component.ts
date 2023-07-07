import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth-service';
import { NotificationBoxService } from 'src/app/shared/services/notification-box/notification-box.service';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

  private sub!: Subscription;

  public loginFormGroup = this.fb.group({
    loginName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(25)]),
    rememberMeCheckBox: new FormControl(false)
  });

  constructor(private readonly fb: FormBuilder,
    private readonly _notificationService: NotificationBoxService,
    private readonly _router: Router, 
    private readonly _authService: AuthService) 
    {
      this.sub = new Subscription();
    }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onLoginClick(): void {
    this.sub.add(this._authService.loginUser(this.loginFormGroup)
    .subscribe(() => {
      this._notificationService.showNotificationBox(NotificationTypes.SUCCES, "Login successful !");
      this._router.navigate(['app', 'home']);
    }));
  }

  public onRegisterNewUserClick(): void {
    this._router.navigate(["signup"]);
  }
}
