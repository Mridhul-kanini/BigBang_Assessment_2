import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/service/toast.service';
import { User } from 'src/service/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastService,
    private userService: RegisterService
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastr.error('Invalid form data');
      return;
    }

    const firstName = this.loginForm.value.firstName.trim().split(' ')[0];

    this.userService.getUsers().subscribe(
      (users: User[]) => {
        const filteredUsers = users.filter(user => user.firstName === firstName);

        if (filteredUsers.length > 0) {
          const user = filteredUsers[0];

          if (user.password === this.loginForm.value.password) {
            if (user.role === 'doctor') {
              this.router.navigate(['/dochome']);
              this.toastr.success(`Dr. ${user.firstName} ${user.lastName} Logged in successfully`);
            } else if (user.role === 'patient') {
              this.router.navigate(['/pathome']);
              this.toastr.success(`${user.firstName} ${user.lastName} Logged in successfully`);
            } else {
              this.router.navigate(['/dashboard']);
              this.toastr.success(`${user.firstName} ${user.lastName} Logged in successfully`);
            }
          } else {
            this.toastr.error('Invalid password');
          }
        } else {
          this.toastr.error('User not found');
        }
      },
      (error: any) => {
        this.toastr.error('Failed to retrieve users');
        console.error(error);
      }
    );
  }
}
