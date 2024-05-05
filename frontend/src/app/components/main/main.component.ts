import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private userSrv:UserService ,private router:Router, private active:ActivatedRoute){

  }

  ngOnInit(){
    this.user = this.userSrv.User
    if(!this.user){
      this.router.navigate(['/login' ], {relativeTo:this.active})
    }
  }

  user :User |null=null

  CVChange(){
    this.user=this.userSrv.User
  }

  

}
