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
    this.jobSvc.getJobsListFromServer().subscribe((res: any) => this.jobList =this.jobSvc.updateList(res) )    
  }

  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }
  
  ngOnInit(){
    this.jobList=this.jobSvc.updateJobListToView()
    this.user = this.userSrv.User
    if(!this.user){
      this.router.navigate(['/login' ], {relativeTo:this.active})
    }
  }

  user :User |null=null
  jobList:Job[] =[]
  filterByUsersType : boolean = false

  CVChange(){
    this.user=this.userSrv.User
  }

  typeOnClick(){
    if(!this.filterByUsersType){
      this.jobSvc.filterJobsByType(this.user?.type!)
    }
    else{
      this.jobSvc.updateJobListToView()
    }
    this.filterByUsersType =!this.filterByUsersType
    this.updateList()

  }

  updateList(){
    this.jobList=this.jobSvc.jobListToView
  }

  logoOnClick(){
    this.router.navigate(['/login' ], {relativeTo:this.active})
  }
  

}
