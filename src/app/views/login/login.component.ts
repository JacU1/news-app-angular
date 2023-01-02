import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  
  public loginFormGroup: FormGroup;

  constructor(private readonly fb: FormBuilder, @Inject(DOCUMENT) private _document: Document) { 

    this.loginFormGroup = this.fb.group([
      {loginName: new FormControl(null, [Validators.required])},
      {password: new FormControl(null, [Validators.required, Validators.min(6), Validators.max(25)])},
      {rememberMeCheckBox: new FormControl(false)}
    ]);

  }

  public ngOnInit(): void {
    this._document.body.classList.add('black-background');
  }

  public ngOnDestroy(): void {
    this._document.body.classList.remove('bodybg-color');
  }

}
