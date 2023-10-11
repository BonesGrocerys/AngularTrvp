import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onHomeClick() {
    this.router.navigate(['/home']);
  }
}
