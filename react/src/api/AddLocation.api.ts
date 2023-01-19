import axios from 'axios'
import { RegisterUserDto, LoginUserDto, CreateLocationDto} from './types'


const  baseURL = 'http://localhost:5555/'

export const AddLocationApi = {
    async register(dto:RegisterUserDto):Promise<any>{        
        return axios({method:'post',url:baseURL+'auth/register',withCredentials:true,data:dto})
    },
    async login(dto:LoginUserDto):Promise<any>{      
        const {data} = await axios({method:'post',url:baseURL+'auth/login',withCredentials:true,data:dto})
        return data
    },
    async getUser():Promise<any>{
        const {data} = await axios({method:'get',url:baseURL+'user/getUser',withCredentials:true})
        return data
    },
    async refresh():Promise<any>{
         const {data} = await axios({method:'get',url:baseURL+'auth/refresh',withCredentials:true})
         return data
    },
    async createLocation(dto:CreateLocationDto):Promise<any>{
        return axios({method:'post',url:baseURL+'location/create',withCredentials:true,data:dto})
    },
    async deleteLocation(dto:{id:string}){
        return axios({method:'post',url:baseURL+'location/delete',withCredentials:true,data:dto})
    } ,
    async getLocation(id:string){
        return axios({method:'get',url:baseURL+`location/find?id=${id}`,withCredentials:true})
    },
    async updateLocation(dto:any){
        return axios({method:'patch',url:baseURL+'location/update',withCredentials:true,data:dto})
    },
    async logout(){
        return axios({method:'post',url:baseURL+'auth/logout',withCredentials:true})
    },
    async signout(){
        return axios({method:'post',url:baseURL+'user/delete',withCredentials:true})
    } 

}