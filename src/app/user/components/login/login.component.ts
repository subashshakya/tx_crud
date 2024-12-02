import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';

import { UserFormsService } from '../../services/forms/user-forms.service';
import { UserSigningMode } from '../../../shared/enums/user-common.enum';
import { Login } from '../../models/login.model';
import { SignUp } from '../../models/sign-up.model';
import { UserApiService } from '../../services/api/user-api.service';

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
  private userApiService = inject(UserApiService);
  private router = inject(Router);

  ngOnInit(): void {
    this.initForms();
    this.userMode = this.componentMode();
  }

  get loginFormControl(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  get signupFormControl(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  public handleLoginFormSubmit(): void {
    if (this.userMode) {
      const loginFormValues: Login = this.loginForm.value;
      this.userApiService.signIn(loginFormValues).subscribe((res) => {
        if (res) {
          this.loginForm.reset();
          this.router.navigateByUrl('transactions');
        }
      });
    } else {
      const signUpFormValues: SignUp = this.signUpForm.value;
      this.userApiService.signUp(signUpFormValues).subscribe((res) => {
        if (res) {
          this.signUpForm.reset();
          this.router.navigateByUrl('/user/login');
        }
      });
    }
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
