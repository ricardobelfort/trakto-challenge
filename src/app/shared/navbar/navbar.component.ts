import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  today: number = Date.now();
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }
}
