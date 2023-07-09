import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/service/doctor';
import { Router } from '@angular/router';
import { DoctorService } from 'src/service/doctor.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Component({
  selector: 'app-pathome',
  templateUrl: './pathome.component.html',
  styleUrls: ['./pathome.component.css']
})
export class PathomeComponent implements OnInit {
  doctors: Doctor[] = [];

  toastrConfig: Partial<GlobalConfig> = {
    positionClass: 'toast-top-right',
    closeButton: true,
    timeOut: 3000
  };

  constructor(
    private doctorService: DoctorService,
    private toastr: ToastrService,
    private router: Router,
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

  establishRelationship(doctor: Doctor): void {
    console.log('Establishing relationship with doctor:', doctor);
    this.toastr.info(
      `An appointment request with Dr. ${doctor.firstName} ${doctor.lastName} has been sent. We will get in touch with you shortly.`,
      'Appointment Confirmation',
      this.toastrConfig
    );
    this.router.navigate(['/home']);
  }
}
