import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Patient } from './patient';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7101/api';

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    const patientsEndpoint = `${this.apiUrl}/Patients`;

    return this.http.get<Patient[]>(patientsEndpoint).pipe(
      mergeMap((patients: Patient[]) => {
        const usersEndpoint = `${this.apiUrl}/Users`;
        return this.http.get<User[]>(usersEndpoint).pipe(
          map((users: User[]) => {
            return patients.map(patient => {
              const matchingUser = users.find(user => user.firstName === patient.firstName);
              if (matchingUser) {
                patient.profilePicture = matchingUser.profilePicture;
              }
              return patient;
            });
          })
        );
      })
    );
  }

  updatePatientStatus(patientId: number, status: string): Observable<any> {
    const endpoint = `${this.apiUrl}/Patients/${patientId}`;

    // Make the necessary HTTP request to update the patient's status
    // Adjust the code according to your API endpoint and request payload
    return this.http.put<any>(endpoint, { status });
  }

  deletePatient(patientId: number): Observable<any> {
    const endpoint = `${this.apiUrl}/Patients/${patientId}`;

    // Make the necessary HTTP request to delete the patient
    // Adjust the code according to your API endpoint
    return this.http.delete<any>(endpoint);
  }
  
}
