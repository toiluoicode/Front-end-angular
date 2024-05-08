import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import it here if standalone
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.url, body, {
      headers: headers,
      observe: 'response',
      withCredentials: true  
    });
  }
}
