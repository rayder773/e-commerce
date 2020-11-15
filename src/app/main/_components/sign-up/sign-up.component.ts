import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/_services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isSignIn = true;
  signInForm = new FormGroup({
    emailInput: new FormControl(''),
    passwordInput: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signIn(this.signInForm.value)
      .subscribe(res => {
        console.log(res);
      });
    // console.log(this.signInForm.value);
  }
}
