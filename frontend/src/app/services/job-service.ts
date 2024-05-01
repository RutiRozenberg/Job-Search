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
        this.getJobsListFromServer();
    }

    jobList:Job [] =[]

    getJobsListFromServer(){
        this.http.get('https://localhost:44337/api/job/Get').subscribe((res: any) => this.jobList = res)
    }

    public get getJoblist(){
        return this.jobList
    }

    public filterJobsByType(type:Types){
        return this.jobList.filter(j=>j.type==type)
    }


    public filterJobsByArea(area:Area){
        return this.jobList.filter(j=>j.WhichArea==area)
    }

    

}

