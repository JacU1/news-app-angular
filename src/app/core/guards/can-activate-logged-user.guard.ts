import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { refreshTokenGetter, tokenGetter } from 'src/app/app.module';
import { AuthService } from 'src/app/shared/services/auth/auth-service';

@Injectable()
export class CanLoadLoggedUserGuard implements CanLoad {
  constructor(private readonly _jwtHelper: JwtHelperService,
              private readonly _authService: AuthService,
              private readonly _router: Router){ }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    const token = tokenGetter();

    if(token && !this._jwtHelper.isTokenExpired(token)) {
      console.log(this._jwtHelper.decodeToken(token))
      return true;
    }

    if(token && this._jwtHelper.isTokenExpired(token)) {
      const refreshToken = refreshTokenGetter();
      const newTokens = await this._authService.refreshToken(token, refreshToken).toPromise();
      console.log(newTokens);
      if(newTokens){
        console.log(this._jwtHelper.decodeToken(newTokens.token));
        console.log(this._jwtHelper.decodeToken(newTokens.refreshToken));
        localStorage.setItem("token", newTokens.token);
        localStorage.setItem("refreshToken", newTokens.refreshToken);
        return true;
      }
      this._router.navigate([""]);
      return false;
    }

    this._router.navigate([""]);
    return false;
  }
}
