import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7101/api/Doctors';

  constructor(private http: HttpClient) {}

  getDoctorData(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  updateDoctor(doctor: Doctor): Observable<any> {
    const url = `${this.apiUrl}/${doctor.id}`;
    return this.http.put(url, doctor);
  }

  updateUser(user: User): Observable<any> {
    const url = `api/users/${user.id}`;
    return this.http.put(url, user);
  }

  deleteDoctorByUserId(userId: string): Observable<any> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.delete(url);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `api/users/${userId}`;
    return this.http.delete(url);
  }
}
