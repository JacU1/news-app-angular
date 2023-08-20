import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { refreshTokenGetter, tokenGetter } from 'src/app/app.module';
import { AuthService } from 'src/app/shared/services/auth/auth-service';
import { NotificationBoxService } from 'src/app/shared/services/notification-box/notification-box.service';
import { NotificationTypes } from '../models/notification-box.interface';

@Injectable()
export class CanLoadLoggedUserGuard implements CanLoad {
  constructor(private readonly _jwtHelper: JwtHelperService,
              private readonly _authService: AuthService,
              private readonly _router: Router,
              private readonly _toastService: NotificationBoxService){ }

  canLoad(route: Route, segments: UrlSegment[]):Observable<boolean> | Promise<boolean> | boolean {
    const token = tokenGetter();

    if(token && !this._jwtHelper.isTokenExpired(token)) {
      return true;
    }

    if(token && this._jwtHelper.isTokenExpired(token)) {
      const refreshToken = refreshTokenGetter();
      return this.refreshTokenAndCheckAccess(token, refreshToken!);
    }

    this._router.navigate([""]);
    return false;
  }

  private refreshTokenAndCheckAccess(token: string, refreshToken: string): Observable<boolean> {
    return this._authService.refreshToken(token, refreshToken).pipe(
      map(newTokens => {
        localStorage.setItem("token", newTokens.token);
        localStorage.setItem("refreshToken", newTokens.refreshToken);
        return true;
      }),
      catchError(error => {
        this._toastService.showNotificationBox(NotificationTypes.DANGER, "Error during token refreshing" + error);
        this._router.navigate([""]);
        return of(false);
      })
    );
  }
}
