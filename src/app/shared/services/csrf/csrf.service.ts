import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private readonly _http: HttpClient, private readonly _auth: AuthService) { }

  public GetandSetToken() {
    const headername = 'X-XSRF-TOKEN';
    const requestToken = this._auth.getCookie("XSRF-COOKIE"); 

    const headers = new HttpHeaders().append(headername, requestToken)
                                        .append('Cache-Control', 'no-cache')
                                        .append('Pragma', 'no-cache')

    return this._http.post(`${BASE_API}/api/Ping/Startupcall`, null, {withCredentials: true, headers}).pipe(
      switchMap(_ => this._http.get(`${BASE_API}/api/Ping/antiforgerytoken`, {withCredentials: true, headers}))
    );
  }

  public testCsrf() {
    const headername = 'X-XSRF-TOKEN';
    const requestToken = this._auth.getCookie("XSRF-COOKIE"); 

    const headers = new HttpHeaders().append(headername, requestToken)
                                        .append('Cache-Control', 'no-cache')
                                        .append('Pragma', 'no-cache')

    return this._http.post(`${BASE_API}/api/Ping/csrftest`, null ,{ withCredentials: true, headers });
  }
}
