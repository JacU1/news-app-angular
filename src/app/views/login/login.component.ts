import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

  public wrongCredentials = false;
  
  public loginFormGroup = this.fb.group({
    loginName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(25)]),
    rememberMeCheckBox: new FormControl(false)
  });

  constructor(private readonly fb: FormBuilder, @Inject(DOCUMENT) private _document: Document, private readonly router: Router) {}

  public ngOnInit(): void {
    this._document.body.classList.add('black-background');
  }

  public ngOnDestroy(): void {
    this._document.body.classList.remove('bodybg-color');
  }

  public onLoginClick(): void {
    if(this.loginFormGroup.get("loginName")?.value === "root" && this.loginFormGroup.get("password")?.value === "root"){
      this.router.navigate(['./app/home']);
    }else {
      alert("Wrong login or password");
    }
  }

}
