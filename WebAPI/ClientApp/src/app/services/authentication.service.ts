import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponseModel, UserLoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { AuthBaseResponse } from '../models/base-response.model';
import { UserRegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = `${environment.API_BASE_URL}/user`;

  constructor(private http: HttpClient) { }

  public login(model: UserLoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${this.apiUrl}/login`, model);
  }

  public registerUser(model: UserRegisterModel): Observable<AuthBaseResponse> {
    // const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<AuthBaseResponse>(`${this.apiUrl}/register`, model, {headers: headers});
  }

  public registerAdminUser(model: UserRegisterModel): Observable<AuthBaseResponse> {
    // const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<AuthBaseResponse>(`${this.apiUrl}/register`, model, {headers: headers});
  }

  public getUserProfileById(id: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/${id}`,
    { headers: headers});
  }
}
