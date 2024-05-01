import { Area } from "./area"
import { Types } from "./type"

export interface Job{
    id:number
    name:string 
    hours:number
    requirements:string
    workFromHome:boolean
    WhichArea:Area
    type:Types


}

