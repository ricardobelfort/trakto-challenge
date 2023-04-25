import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup;
  user = new User();
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(6), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isFormControlInvalid(controlName: string) {
    return (
      this.loginForm.get(controlName)?.invalid &&
      this.loginForm.get(controlName)?.touched
    );
  }

  onSubmit() {
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    this.loginForm.reset();

    this.authService.login(email, password).subscribe(
      (res) => {
        this.toastr.success('Login efetuado com sucesso!');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.isLoading = false;
        this.toastr.error(error.message, 'Falha ao realizar o login');
      }
    );
  }
}
