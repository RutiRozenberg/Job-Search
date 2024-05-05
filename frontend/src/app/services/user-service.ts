import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(private http:HttpClient) { 
        this.User = JSON.parse(localStorage.getItem('currentUser')!)  
    }
    
    User :User | null=null

    getFromServer(password:string , email:string) {
        return this.http.get('https://localhost:7141/api/user/'+''+email+'/'+password)
    }

    updateUser(currentUser:User |null){
        if(currentUser){
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            this.User=currentUser;
            return true
        }
        return false

    }

}
