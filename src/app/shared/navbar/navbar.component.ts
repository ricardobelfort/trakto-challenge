import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  today: number = Date.now();
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');

  @Output() private logout = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
