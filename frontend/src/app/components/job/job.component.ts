import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { UserService } from '../../services/user-service';
import { jobService } from '../../services/job-service';
import { Area } from '../../models/area';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private userSvc :UserService , public jobSvc:jobService){

  }

  @Input() jobData:Job | null=null

  @Output('sendCVOutput') sendCVOutput: EventEmitter<any> = new EventEmitter<any>()

  details:boolean =false

  showOrHide:string = 'show'

  sendCv(){
    this.userSvc.addCvSent(this.userSvc.User?.email! , this.userSvc.User!).subscribe((res: any) => {
      if(res){
        this.userSvc.getFromServer(this.userSvc.User?.password! , this.userSvc.User?.email!).subscribe((res:any)=>
        {
          this.userSvc.updateUser(res)
          this.sendCVOutput.emit()
        })
      }
    });
  }

  showDetails(){
    this.details=!this.details
    if(this.showOrHide=='show'){
      this.showOrHide='hide'
    }
    else{
      this.showOrHide='show'
    }
  }
}
