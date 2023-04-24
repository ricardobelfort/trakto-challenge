import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  errors: string[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(user: User) {
    this.isLoading = true;

    this.authService.login(user).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard']);
        this.toastr.success('Bem-vindo de volta!', res.message);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        localStorage.setItem('firstname', res.firstname);
      },
      (err) => {
        this.isLoading = false;
        this.toastr.error(err.message);
      }
    );
  }
}
