import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ProjectMasterService
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

// ProjectPhasesService
@Injectable({
  providedIn: 'root'
})
export class ProjectPhasesService {
  private apiUrl = 'http://localhost:3000/api/project-phase';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectFundsService
@Injectable({
  providedIn: 'root'
})
export class ProjectFundsService {
  private apiUrl = 'http://localhost:3000/api/project-fund';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectCorrespondenceService
@Injectable({
  providedIn: 'root'
})
export class ProjectCorrespondenceService {
  private apiUrl = 'http://localhost:3000/api/project-correspondence';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectDirectionsService
@Injectable({
  providedIn: 'root'
})
export class ProjectDirectionsService {
  private apiUrl = 'http://localhost:3000/api/project-direction';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectExpenditureService
@Injectable({
  providedIn: 'root'
})
export class ProjectExpenditureService {
  private apiUrl = 'http://localhost:3000/api/project-expenditure';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectTimeLimitExtensionService
@Injectable({
  providedIn: 'root'
})
export class ProjectTimeLimitExtensionService {
  private apiUrl = 'http://localhost:3000/api/project-timeLimitExtension';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectPhaseMasterService
@Injectable({
  providedIn: 'root'
})
export class ProjectPhaseMasterService {
  private apiUrl = 'http://localhost:3000/api/project-PhaseMaster';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

// ProjectTechnicalPersonnalService
@Injectable({
  providedIn: 'root'
})
export class ProjectTechnicalPersonnalService {
  private apiUrl = 'http://localhost:3000/api/project-technicalPersonnal';

  constructor(private http: HttpClient) {}

  submitProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}