import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { jobService } from '../../services/job-service';
import { Job } from '../../models/job';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private userSrv:UserService ,private router:Router, private active:ActivatedRoute , public jobSvc:jobService,private modalService: NgbModal){

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  
  ngOnInit(){
    this.user = this.userSrv.User
    if(!this.user){
      this.router.navigate(['/login' ], {relativeTo:this.active})
    }
    this.jobSvc.getJobsListFromServer().subscribe((res: any) => this.jobList =this.jobSvc.updateList(res) )    
  }

  user :User |null=null
  jobList:Job[] =[]

  CVChange(){
    this.user=this.userSrv.User
  }

  filterByType(){
    this.jobList = this.jobSvc.filterJobsByType(this.user?.type!)
  }

  logoOnClick(){
    this.router.navigate(['/login' ], {relativeTo:this.active})
  }
  

}
