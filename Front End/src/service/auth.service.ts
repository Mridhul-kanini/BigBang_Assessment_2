import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean;
  private role: string;

  constructor() {
    this.isAuthenticated = false;
    this.role = '';
  }

  authenticate(name: string, password: string): boolean {
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.role = 'admin';
    } else if (name === 'doctor' && password === 'doctor') {
      this.isAuthenticated = true;
      this.role = 'doctor';
    } else if (name === 'patient' && password === 'patient') {
      this.isAuthenticated = true;
      this.role = 'patient';
    } else {
      this.isAuthenticated = false;
      this.role = '';
    }

    return this.isAuthenticated;
  }

  getRole(): string {
    return this.role;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
