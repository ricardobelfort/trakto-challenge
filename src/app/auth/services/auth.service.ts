import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.API_URL}/auth/signin`,
        { email, password },
        { responseType: 'json' }
      )
      .pipe(
        map((data) => {
          this.setTokenLocalStorage(data);
        }),
        catchError((err) => {
          this.removeTokenLocalStorage();
          throw err.message;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem(environment.access_token);
  }

  private setTokenLocalStorage(res: any) {
    const { access_token, firstname, lastname } = res;

    localStorage.setItem(environment.access_token, access_token);
    localStorage.setItem(environment.firstname, firstname);
    localStorage.setItem(environment.lastname, lastname);
  }

  removeTokenLocalStorage(): void {
    localStorage.removeItem(environment.access_token);
    localStorage.removeItem(environment.firstname);
    localStorage.removeItem(environment.lastname);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
