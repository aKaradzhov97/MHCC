import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { JobService } from '../services/job.service';

// Interceptor
import { HTTPInterceptor } from './http.interceptor';

describe(`HTTPInterceptor`, () => {
  let service: JobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        JobService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HTTPInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(JobService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('00. Should add an Accept header.', () => {
    service.getAllJobs().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${service.DATA_URL}`);

    expect(httpRequest.request.headers.has('Accept')).toEqual(true);
  });
});
