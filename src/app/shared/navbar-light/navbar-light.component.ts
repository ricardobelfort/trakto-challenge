import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() private logout = new EventEmitter();

  constructor(private router: Router) {}

  onLogout(): void {
    this.logout.emit();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
