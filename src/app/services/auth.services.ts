import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  login(token: string): void {
    if (this.isBrowser) {
      localStorage.setItem('jwt_token', token); // Store the token in local storage
    }
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('jwt_token'); // Remove the token from local storage
    }
  }

  get loggedIn(): boolean {
    return this.isBrowser && !!localStorage.getItem('jwt_token'); // Check local storage directly
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('jwt_token') : null;
  }
}
