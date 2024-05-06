import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { jobService } from '../../services/job-service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss'
})
export class ShowDetailsComponent {

  constructor(public jobSvc:jobService){

  }
  
  @Input() job :Job | null = null 

}
