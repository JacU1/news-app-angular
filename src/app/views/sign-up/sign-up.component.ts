import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { CustomFormValidators } from 'src/app/shared/classes/custom-form-validators';

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

  constructor(private readonly _fb: FormBuilder) 
    {
    this.formGroup = this._fb.group({
      firstName: new FormControl<string | null>('', [Validators.required]),
      lastName: new FormControl<string | null>('', [Validators.required]),
      email: new FormControl<string | null>('', [Validators.required]),
      passwordFormGroup: this._fb.group({
        password: new FormControl<string | null>('', [
          Validators.required, 
          Validators.min(5), 
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
  }

}
