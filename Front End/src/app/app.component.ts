import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isDoctorLoggedIn(): boolean {
    return this.authService.isLoggedIn() && this.authService.getRole() === 'doctor';
  }

  isAdminLoggedIn(): boolean {
    return this.authService.isLoggedIn() && this.authService.getRole() === 'admin';
  }

  isPatientLoggedIn(): boolean {
    return this.authService.isLoggedIn() && this.authService.getRole() === 'patient';
  }
}
