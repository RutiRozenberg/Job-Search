import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private userSvc :UserService){

  }
  @Input() jobData:Job | null=null



  @Output('sendCVOutput') sendCVOutput: EventEmitter<any> = new EventEmitter<any>()


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


}
