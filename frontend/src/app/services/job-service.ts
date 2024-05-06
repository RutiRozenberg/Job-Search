import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Types } from '../models/type';
import { Area } from '../models/area';

@Injectable({
    providedIn: 'root'
})
export class jobService{

    constructor(private http:HttpClient) { 
        this.getJobsListFromServer()
    }

    private jobList:Job [] =[]

    getJobsListFromServer() {
        return this.http.get('https://localhost:7141/api/job')
    }

    public get JobList(){
        return this.jobList
    }

    updateList(list:Job[]){        
        list.forEach(j=> this.jobList.push(j))
        return this.jobList
    }

    public filterJobsByType(type:Types){        
        return this.jobList.filter(j=> j.type===type )
    }


    public filterJobsByArea(area:Area){
        return this.jobList.filter(j=>j.whichArea==area)
    }

    getTypes(){
        return Object.values(Types).filter(v=> Number.isNaN(Number(v)));
    }

    getAreas(){
        return Object.values(Area).filter(v=> Number.isNaN(Number(v)));
    }
    
    
    

}

