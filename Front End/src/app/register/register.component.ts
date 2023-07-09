import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/service/register.service';
import { User } from 'src/service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  statusLabel = 'Status';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      role: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      degree: [''],
      specialization: [''],
      age: [''],
      gender: [''],
      diagnosis: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      profilePicture: ['', Validators.required],
      country: [''],
      address: [''],
      status: ['']
    });
  }

  ngOnInit() {}

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log(this.registerForm.errors);
      console.log(this.registerForm.controls);
          }

    const role = this.formControls['role'].value;
    const user: User = {
      id: 0,
      firstName: this.formControls['firstName'].value,
      lastName: this.formControls['lastName'].value,
      degree: this.formControls['degree'].value,
      specialization: this.formControls['specialization'].value,
      age: this.formControls['age'].value,
      role : this.formControls['role'].value,
      gender: this.formControls['gender'].value,
      diagnosis: this.formControls['diagnosis'].value,
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
      phoneNumber: this.formControls['phoneNumber'].value,
      profilePicture: this.formControls['profilePicture'].value,
      country: this.formControls['country'].value,
      address: this.formControls['address'].value,
      status: this.formControls['status'].value
    };

    this.registerService.registerUser(user, role).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }

  onRoleChange() {
    const roleControl = this.registerForm.get('role');
    if (roleControl) {
      const role = roleControl.value;

      if (role === 'doctor') {
        this.statusLabel = 'Specialization';
      } else if (role === 'patient') {
        this.statusLabel = 'Diagnosis';
      } else {
        this.statusLabel = 'Status';
      }
    }
  }
}
