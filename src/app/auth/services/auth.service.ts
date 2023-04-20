import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, mapTo, of, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string | undefined;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<boolean> {
    return this.http.post<any>('https://api.trakto.io/auth/signin', user).pipe(
      tap((tokens) => this.doLoginUser(user.email, tokens)),
      mapTo(true),
      catchError((error) => {
        alert(error.error);
        return of(false);
      })
    );
  }

  logout() {
    return this.http
      .post<any>('https://api.trakto.io/auth/logout', {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  refreshToken() {
    return this.http
      .post<any>('https://api.trakto.io/auth/signin', {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((tokens: any) => {
          this.storeJwtToken(tokens.jwt);
        })
      );
  }

  private doLoginUser(email: string, tokens: any) {
    this.loggedUser = email;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = '';
    this.removeTokens();
  }

  private getRefreshToken() {}

  private storeJwtToken(jwt: string) {}

  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
