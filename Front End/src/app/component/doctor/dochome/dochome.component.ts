import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/service/patient.service';
import { CauseService } from 'src/service/cause.service';
import { Patient } from 'src/service/patient';
import { Cause } from 'src/service/cause';

@Component({
  selector: 'app-dochome',
  templateUrl: './dochome.component.html',
  styleUrls: ['./dochome.component.css']
})
export class DochomeComponent implements OnInit {
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private causeService: CauseService
  ) {}

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.patientService.getAllPatients().subscribe(
      (data: Patient[]) => {
        this.patients = data;
        this.setShowButtons(true);
        this.fetchCausesForPatients();
      },
      (error: any) => {
        console.log('Error fetching patients:', error);
      }
    );
  }

  setShowButtons(value: boolean): void {
    this.patients.forEach((patient: Patient) => {
      patient.showButtons = value;
    });
  }

  fetchCausesForPatients(): void {
    this.patients.forEach((patient: Patient) => {
      this.causeService.getCausesByPatientId(patient.id).subscribe(
        (causes: Cause[]) => {
          patient.causes = causes;
          patient.diagnosis = this.getDiagnosis(patient);
        },
        (error: any) => {
          console.log('Error fetching causes:', error);
        }
      );
    });
  }

  getDiagnosis(patient: Patient): string {
    if (patient.causes && patient.causes.length > 0) {
      return patient.causes[0].diagnosis;
    }
    return 'No Diagnosis';
  }

  selectDropdownOption(patient: Patient, option: string): void {
    patient.dropdownOption = option;
    patient.showButtons = false;
    patient.selectedOption = option;

    switch (option) {
      case 'All Clear':
      case 'Need to give attention':
      case 'Critical':
        patient.fontColor = 'text-white';
        break;
      default:
        patient.fontColor = 'text-gray-700';
    }

    this.updatePatientStatus(patient);
  }

  updatePatientStatus(patient: Patient): void {
    this.patientService.updatePatientStatus(patient.id, patient.selectedOption!).subscribe(
      (response: any) => {
        console.log('Patient status updated successfully:', response);
      },
      (error: any) => {
        console.log('Error updating patient status:', error);
      }
    );
  }

  closeOverlay(patient: Patient): void {
    patient.showOverlay = false;
  }

  getCardClass(patient: Patient): string {
    switch (patient.selectedOption) {
      case 'All Clear':
        return 'card-clear';
      case 'Need to give attention':
        return 'card-serious';
      case 'Critical':
        return 'card-danger';
      default:
        return 'card-default';
    }
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient.id).subscribe(
      (response: any) => {
        console.log('Patient deleted successfully:', response);
        this.patients = this.patients.filter((p: Patient) => p.id !== patient.id);
      },
      (error: any) => {
        console.log('Error deleting patient:', error);
      }
    );
  }
}
