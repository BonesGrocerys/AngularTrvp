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

  validation() {
    if (this.username.length === 0 || this.password.length === 0) {
      console.log('false');
      this.error = 'Error';
    } else {
      console.log('true');
      this.error = 'ok';
    }
  }
}
