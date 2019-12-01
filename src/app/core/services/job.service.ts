// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { ServerResponse } from '../../shared/models/server-response.model';
import { Job } from '../../shared/models/job.model';

// Constants
import { BASE_URL } from '../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  DATA_URL = BASE_URL + 'assets/data/jobs.json';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<ServerResponse<Job>> {
    return this.http.get<ServerResponse<Job>>(this.DATA_URL);
  }

}
