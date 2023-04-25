import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.scss'],
})
export class NavbarLightComponent {
  today: number = Date.now();
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.removeTokenLocalStorage();
    this.router.navigate(['/']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
