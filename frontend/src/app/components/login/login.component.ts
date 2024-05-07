import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor(private userSvc: UserService, private router: Router, private active: ActivatedRoute) {
    localStorage.removeItem("currentUser")
  }

  userData: any = { email: '', password: '' }
  isOnClick: boolean = false
  passwordLength: number = 0
  containSpaces:boolean =false

  loginClick() {
    this.isOnClick = true
    this.passwordLength = this.userData.password.length
    this.containSpaces =  ! (this.userData.password.indexOf(' ') === -1)
    if (this.userData.email != '' && this.userData.password != '' && this.passwordLength >= 8 && ! this.containSpaces) {
      this.userSvc.getFromServer(this.userData.password, this.userData.email).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('currentUser', res)
          this.userSvc.updateUser(res)
          this.router.navigate(['/'], { relativeTo: this.active })
        }
        else {
          if (this.userData.email != '' || this.userData.password != '') {
            this.userData.email = ''
            this.userData.password = ''
            alert('User does not exist. Try again')
            this.isOnClick = false
          }
        }
      })
    }
  }
}
