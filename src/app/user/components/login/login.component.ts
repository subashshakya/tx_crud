import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';

import { UserFormsService } from '../../services/forms/user-forms.service';
import { UserSigningMode } from '../../../shared/enums/user-common.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    InputMaskModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public signUpForm!: FormGroup;
  public userMode!: boolean;

  private userFormService = inject(UserFormsService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.initForms();
    this.userMode = this.componentMode();
    console.log(this.loginFormControl);
  }

  get loginFormControl(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  get signupFormControl(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  public handleLoginFormSubmit(): void {
    console.log(this.loginForm.value);
  }

  private initForms = (): void => {
    this.loginForm = this.userFormService.initUserLoginForm();
    this.signUpForm = this.userFormService.initUserSingupForm();
  };

  private componentMode = (): boolean => {
    let boolUserMode = false;
    this.activatedRoute.data.subscribe((data) => {
      const userModeData = data['userMode'];
      boolUserMode = userModeData === UserSigningMode.Login;
    });
    return boolUserMode;
  };
}
