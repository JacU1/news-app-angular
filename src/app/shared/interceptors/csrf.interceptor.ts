import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth-service';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  constructor(private readonly _auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headername = 'X-XSRF-TOKEN';
    const requestToken = this._auth.getCookie("CSRF-COOKIE"); 
    console.log(headername, requestToken);

    request = request.clone({
      withCredentials: true,
      headers: request.headers.append(headername, requestToken)
                                      .append('Cache-Control', 'no-cache')
                                      .append('Pragma', 'no-cache')
  });
    return next.handle(request)
  }
}
