import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationTypes } from 'src/app/core/models/notification-box.interface';
import { CustomFormValidators } from 'src/app/shared/classes/custom-form-validators';
import { AuthService } from 'src/app/shared/services/auth/auth-service';
import { NotificationBoxService } from 'src/app/shared/services/notification-box/notification-box.service';

@Component({
  selector: 'app-signUp-component',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public submitClick!: boolean;
  
  private formGroup!: FormGroup;

  get getPasswordFormGroup(): FormGroup {
    return this.formGroup.get("passwordFormGroup") as FormGroup;
  }

  get getFormGroup(): FormGroup {
    return this.formGroup;
  }

  constructor(private readonly _fb: FormBuilder,
              private readonly _authService: AuthService,
              private readonly _notificationBox: NotificationBoxService,
              private readonly _router: Router) 
    {
    this.formGroup = this._fb.group({
      firstName: new FormControl<string | null>('', [Validators.required]),
      lastName: new FormControl<string | null>('', [Validators.required]),
      email: new FormControl<string | null>('', [Validators.required]),
      passwordFormGroup: this._fb.group({
        password: new FormControl<string | null>('', [
          Validators.required, 
          Validators.min(5),
          Validators.max(25), 
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/g)]),
        confirmPassword: new FormControl<string | null>('', [Validators.required]),
      },{
        validator: CustomFormValidators.confirmPasswordValidator
      }),
      userTag: new FormControl<string | null>('', [Validators.required, Validators.min(5)])
    });
  }

  ngOnInit(): void {console.log(this.formGroup); }

  onSubmit() : void {
    this.submitClick = true;
    this._authService.registerUser(this.formGroup).subscribe(res => {
      this._notificationBox.showNotificationBox(NotificationTypes.SUCCES, "Register done!");
      console.log(res);
      this._router.navigateByUrl("/");
    });
  }

  onResetForm(): void {
    this.formGroup.reset();
  }

}
