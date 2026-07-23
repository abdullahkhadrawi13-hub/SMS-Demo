import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5009/Auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(
      `${this.apiUrl}/Login`,
      data
    );
  }

  changePassword(data: any) {
    return this.http.put(
      `${this.apiUrl}/ChangePassword`,
      data,
      { responseType: 'text' }
    );
  }
}