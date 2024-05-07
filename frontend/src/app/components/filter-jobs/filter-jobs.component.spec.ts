import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterJobsComponent } from './filter-jobs.component';

describe('FilterJobsComponent', () => {
  let component: FilterJobsComponent;
  let fixture: ComponentFixture<FilterJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
