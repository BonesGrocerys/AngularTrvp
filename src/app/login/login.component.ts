import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor() {}

  onSubmit() {
    if (this.username.length == 0 || this.password.length == 0) {
      this.error = 'Please enter your username and password';
    } else {
      this.error = 'ok';
    }
  }
}
