import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cause } from './cause';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'https://localhost:7101/api';

  constructor(private http: HttpClient) { }

  getCausesByPatientId(patientId: number): Observable<Cause[]> {
    const url = `${this.baseUrl}/causes?patientId=${patientId}`;
    return this.http.get<Cause[]>(url);
  }
  
}
