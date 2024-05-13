import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { GroupReport } from '../DTO/groupReports';
const URL = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class ReportService {
 
  constructor(private http: HttpClient) { }
  GetReportdataForm(): Observable<GroupReport[]>{
    return this.http.get<GroupReport[]>("http://localhost:8080/Report/findAll");
  }
}
