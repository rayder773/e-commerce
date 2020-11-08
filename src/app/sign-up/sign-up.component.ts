import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.signInForm.value);
  }
}
