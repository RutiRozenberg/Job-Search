import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { jobService } from '../../services/job-service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent implements OnInit {
  constructor(private jobSvc:jobService){

  }

  ngOnInit(): void {
    this.jobSvc.getJobsListFromServer().subscribe((res: any) => this.jobList = res )

  }

  @Output('CVChange') CVChange: EventEmitter<any> = new EventEmitter<any>()


  jobList:Job [] = [] 

  sendCVOutput(){
    this.CVChange.emit()
  }

}
