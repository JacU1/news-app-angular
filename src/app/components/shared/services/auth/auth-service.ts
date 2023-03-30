import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { BASE_API } from 'src/app/core/config/constants';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';
import { IUserAuthResponse } from 'src/app/core/models/user-auth-response';
import { NotificationBoxService } from '../notification-box/notification-box.service';

@Injectable()
export class AuthService {
  
  constructor(private readonly _http: HttpClient) { }

  public userLoggedIn: boolean = false;

  public loginUser(loginForm: FormGroup): Observable<IUserAuthResponse> {
    const loginBody = {
      email: loginForm.get("loginName")?.value,
      password: loginForm.get("password")?.value
    };
    
    return this._http.post<IUserAuthResponse>(`${BASE_API}/api/Auth/login`, loginBody);
  }

  public isTokenExpired(): boolean {
    return false;
  }

}