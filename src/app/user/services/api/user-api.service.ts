import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Login } from '../../models/login.model';
import { SignUp } from '../../models/sign-up.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private rootUrl =
    'https://674a98bf868020296634de08.mockapi.io/transactions/user';
  private httpClient = inject(HttpClient);

  constructor() {}

  public signIn = (signInObj: Login): Observable<any> => {
    return this.httpClient.post(this.rootUrl, signInObj);
  };

  public signUp = (signupObj: SignUp): Observable<any> => {
    return this.httpClient.post(this.rootUrl, signupObj);
  };
}
