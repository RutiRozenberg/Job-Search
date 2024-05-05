import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(private http:HttpClient) { 
        this.user = JSON.parse(localStorage.getItem('currentUser')!) 
         
    }
    
    private user :User | null=null

    public get User(){
        return this.user
    }

    getFromServer(password:string , email:string) {
        return this.http.get('https://localhost:7141/api/user/'+''+email+'/'+password)
    }

    updateUser(currentUser:User |null){
        if(currentUser){
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            this.user=currentUser;
            return true
        }
        return false

    }

    addCvSent(email:string , user:User){
        return this.http.put('https://localhost:7141/api/user/'+email , user)
    }

    

}
