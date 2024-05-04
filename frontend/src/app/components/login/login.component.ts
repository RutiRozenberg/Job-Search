import { Component } from '@angular/core';
import { UserService } from '../../services/user-servuce';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userSrv:UserService,private router:Router, private active:ActivatedRoute){

  }
  userData:any ={email: '' , password: ''}
  isOnClick:boolean=false

  loginClick(){
    this.isOnClick=true;
    this.userSrv.getFromServer(this.userData.password , this.userData.email)
    if(window.localStorage.getItem("currentUser")){
      this.router.navigate(['/jobs' ], {relativeTo:this.active})
    }
    else{
      if(this.userData.email!='' && this.userData.password!=''){
        this.userData.email=''
        this.userData.password=''
        alert('User does not exist. Try again')
        this.isOnClick=false
      }  
    } 
  }

}
