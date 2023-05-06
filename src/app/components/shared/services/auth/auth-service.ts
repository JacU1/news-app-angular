import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EMPTY, Observable, catchError, lastValueFrom, tap } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';
import { IUserAuthResponse } from 'src/app/core/models/user-auth-response';
import { NotificationBoxService } from '../notification-box/notification-box.service';

@Injectable()
export class AuthService {
  constructor(private readonly _http: HttpClient,
              private readonly _notificationService: NotificationBoxService) {}

  public userLoggedIn!: boolean;
  public tokenRefresed!: boolean;

  public loginUser(loginForm: FormGroup): Observable<IUserAuthResponse> {
    const loginBody = {
      email: loginForm.get("loginName")?.value,
      password: loginForm.get("password")?.value
    };
    
    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Auth/login`, loginBody)
      .pipe(tap((auth => {
        localStorage.setItem("token", auth.token);
        localStorage.setItem("refreshToken", auth.refreshToken);
       
        this.userLoggedIn = true;
      })),catchError(err => {
        const errMessage = err.error.errors ? err.error.errors.Email[0] : err.error.errorMessage;
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, errMessage);
        return EMPTY;
      }));
  }

  public refreshToken(token: string | null, refreshToken: string| null): Observable<IUserAuthResponse> {
    const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });

    return this._http.post<IUserAuthResponse>(`${BASE_API}/refresh`, credentials).pipe(
      catchError(err => {
        const errMessage = err.error.errorMessage;
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, errMessage);
        return EMPTY;
      })
    );
  }
}