import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EMPTY, Observable, catchError, lastValueFrom, tap } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';
import { IUserAuthResponse } from 'src/app/core/models/user-auth-response';
import { NotificationBoxService } from '../notification-box/notification-box.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private readonly _http: HttpClient,
              private readonly _notificationService: NotificationBoxService,
              private readonly _router: Router) {}

  public loginUser(loginForm: FormGroup): Observable<IUserAuthResponse> {
    const loginBody = {
      email: loginForm.get("loginName")?.value,
      password: loginForm.get("password")?.value
    };
    
    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Auth/login`, loginBody)
      .pipe(tap((auth => {
        localStorage.setItem("token", auth.token);
        localStorage.setItem("refreshToken", auth.refreshToken);
      })),catchError(err => {
        const errMessage = err.error.errors ? err.error.errors.Email[0] : err.error.errorMessage;
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, errMessage);
        return EMPTY;
      }));
  }

  public refreshToken(token: string | null, refreshToken: string| null): Observable<IUserAuthResponse> {
    const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });
    console.log(credentials);

    const headers = new HttpHeaders()
    .set('content-type', 'application/json')

    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Token/refresh`,credentials, {headers}).pipe(
      catchError(err => {
        console.log(err);
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, err.message);
        return EMPTY;
      })
    );
  }

  public logoutUser() : void {
    this._notificationService.showNotificationBox(NotificationTypes.INFO, "User logged out.")
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this._router.navigate([""]);
  }
}