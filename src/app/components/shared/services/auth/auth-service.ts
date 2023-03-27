import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BASE_API } from 'src/app/core/config/constants';
import { IUserAuthResponse } from 'src/app/core/models/user-auth-response';

@Injectable()
export class AuthService {
  
  constructor(private readonly _http: HttpClient,
    private readonly _router: Router) { }

  public userLoggedIn: boolean = false;

  public loginUser(loginForm: FormGroup): void {
    const loginBody = {
      email: loginForm.get("loginName")?.value,
      password: loginForm.get("password")?.value
    };

    this._http.post<IUserAuthResponse>(`${BASE_API}/api/Auth/login`, loginBody).subscribe(res => {
      if(res.isAuthSuccessful) {
        localStorage.setItem("token", res.token);
        this.userLoggedIn = true;
        this._router.navigate(["app/home"]);
      } else {
        this.userLoggedIn = false;
        alert(res.errorMessage);
      }
    })
  }

  public isTokenExpired(): boolean {
    return false;
  }

}