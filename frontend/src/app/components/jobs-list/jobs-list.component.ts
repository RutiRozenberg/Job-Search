import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { jobService } from '../../services/job-service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent  {


  @Output('CVChange') CVChange: EventEmitter<any> = new EventEmitter<any>()


  @Input() jobList:Job [] = [] 

  sendCVOutput(){
    this.CVChange.emit()
  }

}
