// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Services
import { JobService } from '../../../core/services/job.service';

// Models
import { Job } from '../../../shared/models/job.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  jobs: Job[] = [];
  selectedJob: Job;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService
      .getAllJobs()
      .subscribe((res) => {
        this.jobs = res.body.filter(x => x.state === 'active');
      });
  }

  display(id: string): void {
    this.selectedJob = this.jobs.filter((job: Job) => job.id === id)[0];
  }
}
