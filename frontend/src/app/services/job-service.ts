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

    }

    private jobList:Job [] =[]

    jobListToView:Job[]=[]

    getJobsListFromServer() {
        return this.http.get('https://localhost:7141/api/job')
    }

    public get JobList(){
        return this.jobList
    }

    updateJobListToView(){
        this.jobListToView=this.jobList
        return this.jobListToView
    }

    updateList(list:Job[]){ 
        this.jobList=[]       
        list.forEach(j=> this.jobList.push(j))
        this.jobListToView=this.jobList
        return this.jobListToView
    }

    public filterJobsByType(type:Types){        
        return this.jobListToView.filter(j=> j.type===type )
    }

    public filterJobsByArea(area:Area){
        return this.jobListToView.filter(j=>j.whichArea==area)
    }

    getTypes(){
        return Object.values(Types).filter(v=> Number.isNaN(Number(v)));
    }

    getAreas(){
        return Object.values(Area).filter(v=> Number.isNaN(Number(v)));
    }

}