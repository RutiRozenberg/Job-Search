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

    private filterByType: Types|null= null
    private filterByArea: Area|null=null

    getJobsListFromServer() {
        return this.http.get('https://localhost:7141/api/job')
    }

    public get JobList(){
        return this.jobList
    }

    updateJobListToView(){
        this.filterByArea =null
        this.filterByType=null
        this.jobListToView=this.jobList
        return this.jobListToView
    }

    updateList(list:Job[]){ 
        this.jobList=[]       
        list.forEach(j=> this.jobList.push(j))
        this.jobListToView=this.jobList
        return this.jobListToView
    }

    filterJobsByType(type:Types){ 
        if(this.filterByType){
            this.jobListToView=this.jobList
            if(this.filterByArea){
                this.jobListToView = this.jobList.filter(j=> j.whichArea === Number(Area[this.filterByArea!]))
            }
        } 
        if(typeof(type)==="number"){
            this.jobListToView = this.jobList.filter(j=> j.type === type)
        }
        else{
            this.filterByType =type
            this.jobListToView = this.jobListToView.filter(j=> j.type=== Number(Types[type])) 
        }
        
    }

    filterJobsByArea(area:Area){
        if(this.filterByArea){
            this.jobListToView = this.jobList
            if(this.filterByType){
                this.jobListToView = this.jobList.filter(j=> j.type ===Number(Types[this.filterByType!!]))
            }
            
        }
        this.filterByArea = area 
        this.jobListToView = this.jobListToView.filter(j=>j.whichArea==Number(Area[area]))
    }

    getTypes(){
        return Object.values(Types).filter(v=> Number.isNaN(Number(v)));
    }

    getAreas(){
        return Object.values(Area).filter(v=> Number.isNaN(Number(v)));
    }

}