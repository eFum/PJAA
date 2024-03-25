import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from './user-type.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private baseUrl = 'http://localhost:8080/api/userTypes';

  constructor(private http: HttpClient) {}

  getUserType(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.baseUrl}/${id}`);
  }

  getUserTypes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addUserType(userType: any): Observable<any> {
    return this.http.post(this.baseUrl, userType);
  }

  editUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(`${this.baseUrl}/${userType.id}`, userType);
  }

  deleteUserType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
