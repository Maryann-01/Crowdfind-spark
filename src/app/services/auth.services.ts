import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = typeof window !== 'undefined' && !!this.getToken(); // Check for window before accessing localStorage

  login(token: string): void {
    this.isLoggedIn = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwt_token', token); // Store the token in local storage
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt_token'); // Remove the token from local storage
    }
  }

  get loggedIn(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('jwt_token'); // Check local storage directly
  }

  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('jwt_token') : null;
  }
}
