  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, forkJoin, of } from 'rxjs';
  import { mergeMap } from 'rxjs/operators';
  import { User } from './user';

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterService {
    private apiUrl = 'https://localhost:7101/api';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/Users`);
    }
    
    registerUser(user: User, role: string): Observable<any> {
      const endpoint = `${this.apiUrl}/Users`;

      return this.http.post<any>(endpoint, user).pipe(
        mergeMap((response: any) => {
          if (role === 'doctor') {
            return this.http.post<any>(`${this.apiUrl}/Doctors`, user);
          } else if (role === 'patient') {
            return this.registerPatientWithCauses(user);
          } else {
            return of(response);
          }
        })
      );
    }

    private registerPatientWithCauses(user: User): Observable<any> {
      const endpoint = `${this.apiUrl}/Patients`;
      return this.http.post<any>(endpoint, user).pipe(
        mergeMap((response: any) => {
          const causesData = {
            name: user.firstName,
            age: user.age,
            diagnosis: user.diagnosis,
          };
          return this.http.post<any>(`${this.apiUrl}/Causes`, causesData);
        })
      );
    }

    deleteDoctor(doctorId: number): Observable<any> {
      const userEndpoint = `${this.apiUrl}/Users`;
      const doctorEndpoint = `${this.apiUrl}/Doctors/${doctorId}`;
    
      const deleteUser$ = this.http.delete<any>(`${userEndpoint}/${doctorId}`);
      const deleteDoctor$ = this.http.delete<any>(doctorEndpoint);
    
      return forkJoin([deleteUser$, deleteDoctor$]);
    }
    
    
    
  }
