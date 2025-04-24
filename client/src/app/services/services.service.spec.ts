import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectMasterService {
  private apiUrl = 'http://localhost:3000/api/project-master';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
