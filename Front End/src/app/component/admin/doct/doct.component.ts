import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/service/doctor.service';
import { Doctor } from 'src/service/doctor';
import { RegisterService } from 'src/service/register.service';
import { User } from 'src/service/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doct',
  templateUrl: './doct.component.html',
  styleUrls: ['./doct.component.css']
})
export class DoctComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    this.doctorService.getDoctorData().subscribe(
      (doctors: Doctor[]) => {
        this.doctors = doctors;
      },
      (error: any) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  approveDoctor(doctor: Doctor): void {
    console.log(`Approved: ${doctor.firstName} ${doctor.lastName}`);
    doctor.approved = true;
  doctor.declined = false;
    const firstName = doctor.firstName;
  
    this.registerService.getUsers().subscribe(
      (users: User[]) => {
        const filteredUsers = users.filter(user => user.firstName === firstName);
  
        if (filteredUsers.length > 0) {
          const user = filteredUsers[0];
          user.status = 'Approved';
  
          this.registerService.registerUser(user, 'doctor').subscribe(
            () => {
              console.log(`User status updated: ${user.firstName}`);
              this.fetchDoctors();
              this.toastr.success(`${user.firstName} has been approved to work`, 'Doctor Approved', { timeOut: 5000 });
            },
            (error: any) => {
              console.error('Error updating user status:', error);
            }
          );
        }
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  
  declineDoctor(doctor: Doctor): void {
    console.log(`Declined: ${doctor.firstName} ${doctor.lastName}`);
    doctor.approved = false;
  doctor.declined = true;
    const doctorId = doctor.id;

    this.registerService.deleteDoctor(doctorId).subscribe(
      () => {
        console.log(`Doctor deleted: ${doctor.firstName}`);
        // Refresh the list of doctors
        this.fetchDoctors();
      },
      (error: any) => {
        console.error('Error deleting doctor:', error);
      }
    );
  }
}
