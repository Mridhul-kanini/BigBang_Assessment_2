import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/service/patient';
import { PatientService } from 'src/service/patient.service';

@Component({
  selector: 'app-pat',
  templateUrl: './pat.component.html',
  styleUrls: ['./pat.component.css']
})
export class PatComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.patientService.getAllPatients().subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      },
      (error: any) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  getDiagnosis(patient: Patient): string {
    if (patient.causes && patient.causes.length > 0) {
      return patient.causes[0].diagnosis;
    } else {
      return '';
    }
  }
}
