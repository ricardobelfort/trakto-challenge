import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.scss'],
})
export class NavbarLightComponent {
  today: number = Date.now();
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
