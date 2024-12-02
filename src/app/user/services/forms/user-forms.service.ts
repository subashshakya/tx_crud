import { Injectable, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserFormsService {
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {}

  public initUserLoginForm = (): FormGroup => {
    return this.formBuilder.group({
      username: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
          Validators.pattern(/^\d{4}-\d{3}-\d{3}$/),
        ],
      ],
    });
  };

  public initUserSingupForm = (): FormGroup => {
    return this.formBuilder.group({
      username: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
          Validators.pattern(/^\d{4}-\d{3}-\d{3}$/),
        ],
      ],
      firstName: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]{1,30}$/),
          Validators.maxLength(30),
          Validators.minLength(3),
        ],
      ],
      middleName: [
        null,
        [Validators.required, Validators.pattern(/^[a-zA-Z ]{1,30}$/)],
      ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]{1,30}$/),
          Validators.maxLength(30),
          Validators.minLength(3),
        ],
      ],
    });
  };
}
