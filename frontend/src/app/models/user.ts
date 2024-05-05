import { Types } from "./type"

export interface User{
    email:string 
    name:string
    password:string
    type:Types
    countOfCVsSent:number
}
