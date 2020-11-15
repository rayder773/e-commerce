import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL, ROUTES} from '../../../../commonConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(user): Observable<any> {
    return this.http.post(API_URL + ROUTES.signIn, {
      email: user.emailInput,
      password: user.passwordInput
    });
  }
}
