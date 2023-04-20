import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = new User();
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(user: User) {
    this.isLoading = true;

    this.authService.login(user).subscribe((res: any) => {
      if (res.status === 201) {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        this.router.navigate(['/dashboard']);
      } else if (res.statusCode === 401) {
        console.log(res.message);
      } else {
        console.error('Internal server error!');
      }
    });
  }
}
