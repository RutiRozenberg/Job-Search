import { Component, EventEmitter, Output } from '@angular/core';
import { jobService } from '../../services/job-service';
import { Area } from '../../models/area';
import { Types } from '../../models/type';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrl: './filter-jobs.component.scss'
})
export class FilterJobsComponent {
  constructor(public jobSvc :jobService){

  }

  area:number | null =null
  type :number | null =null

  @Output('filterAction') filterAction: EventEmitter<any> = new EventEmitter<any>()
  @Output('cancelAction') cancelAction: EventEmitter<any> = new EventEmitter<any>()

  filterJobs(){
    if(this.area){
      this.jobSvc.filterJobsByArea(this.area)
      this.filterAction.emit()    
    }
    if (this.type) {
      this.jobSvc.filterJobsByType(this.type)
      console.log(this.type);
      
      console.log("filter ", this.jobSvc.jobListToView);
      
      this.filterAction.emit()
    }
  }

  cancelOnClick(){
    this.jobSvc.updateJobListToView()
    this.cancelAction.emit()
    this.area=null
    this.type=null
  }
}
