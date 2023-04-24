import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.scss'],
})
export class NavbarLightComponent {
  today: number = Date.now();
  username = localStorage.getItem('firstname');

  constructor(private router: Router) {}

  getUername() {
    return localStorage.getItem('firstname');
  }

  logout() {
    this.router.navigate(['/']);
  }
}
