import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
