import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EMPTY, Observable, catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';
import { IUserAuthResponse } from 'src/app/core/models/user-auth-response';
import { NotificationBoxService } from '../notification-box/notification-box.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  constructor(private readonly _http: HttpClient,
              private readonly _notificationService: NotificationBoxService,
              private readonly _router: Router,
              private readonly _cookieService: CookieService) {}

  public loginUser(loginForm: FormGroup): Observable<IUserAuthResponse> {     // każde zapytanie musi być switchMapem żeby pierw wysłać zapytanie po token i potem ten token leci w interpreceptorze
    const loginBody = {
      email: loginForm.get("loginName")?.value,
      password: loginForm.get("password")?.value
    };

    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Auth/login`, loginBody)
      .pipe(tap((auth => {
        this.setAccessToken(auth.token);
        this.setRefreshToken(auth.refreshToken);
        localStorage.setItem("access_token", auth.token);
      })),catchError(err => {
        const errMessage = err.error.errors ? err.error.errors.Email[0] : err.error.errorMessage;
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, errMessage ? errMessage : "Login error");
        return EMPTY;
      }));
  }

  public refreshToken(token: string | null, refreshToken: string| null): Observable<IUserAuthResponse> {
    const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });

    const headers = new HttpHeaders()
    .set('content-type', 'application/json');

    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Token/refresh`,credentials, {headers}).pipe(
      catchError(err => {
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, "Error during token refreshing" + err.message);
        return EMPTY;
      })
    );
  }

  public refreshTokenAndCheckAccess(token: string, refreshToken: string): Observable<boolean> {
    return this.refreshToken(token, refreshToken).pipe(
      map(newTokens => {
        this.setAccessToken(newTokens.token);
        this.setRefreshToken(newTokens.refreshToken);
        return true;
      }),
      catchError(error => {
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, "Error during token refreshing" + error);
        this._router.navigate(["login"]);
        return of(false);
      })
    );
  }

  public logoutUser() : void {
    this._notificationService.showNotificationBox(NotificationTypes.INFO, "User logged out.");
    this.removeAccessToken();
    this.removeRefreshAccessToken();
    this._router.navigate(["login"]);
  }

  public registerUser(form: FormGroup): Observable<any> {
    const formValue = form.getRawValue();
    const body = {
      name: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      userTag: formValue.userTag,
      password: formValue.passwordFormGroup.password
    }

    const headers = new HttpHeaders()
    .set('content-type', 'application/json');

    return this._http.post<any>(`${BASE_API}/api/User/register`,body, {headers}).pipe(
      catchError(err => {
        this._notificationService.showNotificationBox(NotificationTypes.DANGER, err.message);
        return EMPTY;
      })
    );
  }

  setAccessToken(token: string): void {
    this._cookieService.set('access_token', token);
  }

  setRefreshToken(token: string): void {
    this._cookieService.set('refresh_Token', token);
  }

  getCookie(name: string): string {
    return this._cookieService.get(name);
  }

  getAccessToken(): string {
    return this._cookieService.get('access_token');
  }

  removeAccessToken(): void {
    this._cookieService.delete('access_token');
  }

  removeRefreshAccessToken(): void {
    this._cookieService.delete('refresh_Token');
  }
}
