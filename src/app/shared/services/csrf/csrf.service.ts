import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private readonly _http: HttpClient) { }

  public GetandSetToken() {
    return this._http.post(`${BASE_API}/api/Ping/Startupcall`, {
    }).pipe(
      switchMap(_ => this._http.get(`${BASE_API}/api/Ping/antiforgerytoken`))
    );
  }
}
