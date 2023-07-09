import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cause } from './cause';

@Injectable({
  providedIn: 'root'
})
export class CauseService {
  private baseUrl = 'https://localhost:7101/api';

  constructor(private http: HttpClient) { }

  getCausesByPatientId(patientId: number): Observable<Cause[]> {
    const url = `${this.baseUrl}/causes?patientId=${patientId}`;
    return this.http.get<Cause[]>(url);
  }
}
