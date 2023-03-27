import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/components/shared/services/auth/auth-service';

@Injectable()
export class CanLoadLoggedUserGuard implements CanLoad {
  constructor(private readonly _authService: AuthService,
              private readonly _router: Router){ }

  canLoad(route: Route, segments: UrlSegment[]) : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this._authService.userLoggedIn) {
      this._router.navigate([""]);
      return false;
    }
    return true;
  }
}
