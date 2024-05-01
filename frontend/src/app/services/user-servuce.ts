import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(private http:HttpClient) { 

    }
    
    User :User | null=null

    getFromServer(password:string , name:string){
        this.http.get('https://localhost:44337/api/'+''+name+'/'+password).subscribe((res: any) => this.User = res)
    }

    

  

}

