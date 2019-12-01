import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Modules
import { MaterialModule } from '../../material/material.module';

// Services
import { JobService } from '../../../core/services/job.service';

// Components
import { LandingComponent } from './landing.component';


class MockJobService {
}

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        /* Import components here. */
        LandingComponent,
      ],
      imports: [
        /* Import Angular modules here. */
        MaterialModule,
      ],
      providers: [
        /* Use custom or usual providers for injected services here. */
        { provide: JobService, useClass: MockJobService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('00. Should create the Landing component.', () => {
    expect(component).toBeDefined();
  });

});
