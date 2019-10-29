import { MasterService } from './../services/master.service';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName: [''],
    password: ['']
  });

  userIcon = faUser;
  passwordIcon = faKey;
  isUserNameFocused = false;
  isPasswordFocused = false;

  constructor(
    private fb: FormBuilder,
    private loginSevice: LoginService,
    private master: MasterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.master.setSourceName('Login');
  }

  onUserNameFocus(): void {
    this.isUserNameFocused = true;
  }

  onPasswordFocus(): void {
    this.isPasswordFocused = true;
  }

  onUserNameUnfocus(): void {
    this.isUserNameFocused = false;
  }

  onPasswordUnfocus(): void {
    this.isPasswordFocused = false;
  }

  login(): void {
    const values = this.loginForm.value;
    const isCorrectUser = this.loginSevice.login(
      values.userName,
      values.password
    );
    if (isCorrectUser) {
      this.router.navigate(['/news-headlines']);
    } else {
      /*******************
       * Add Visual Feedback Of Error
       * Display Proper Error Msg
       */
      this.loginForm.reset();
    }
  }
}
