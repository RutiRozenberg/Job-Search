import { Types } from "./type"

export interface User{
    email:number
    name:string
    password:string
    type:Types
    countOfCVsSent:number
}
