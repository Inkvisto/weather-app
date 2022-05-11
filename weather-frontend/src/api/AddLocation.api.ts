import axios from 'axios'

import { RegisterUserDto,LoginUserDto,ResponseUser, CreateLocationDto, UserFromToken } from './types'
import {    instanceOf } from 'prop-types'
import Cookies from 'universal-cookie/es6'


const cookies = new Cookies()

const token = cookies.get('authToken')


const instanse  = axios.create({
    baseURL: 'http://localhost:5555',
})

const  baseURL = 'http://localhost:5555/'


export const AddLocationApi = {
    async register(dto:RegisterUserDto):Promise<any>{
        const {data} = await  instanse.post<RegisterUserDto, { data: ResponseUser}>('auth/register',dto);
        return data;
    },
    async login(dto:LoginUserDto):Promise<any>{      
        const {data} = await instanse.post<LoginUserDto, { data: ResponseUser}>('auth/login',dto);
        return data;
    },
    async createLocation(dto:CreateLocationDto):Promise<any>{
        return axios({method:'post',url:baseURL+'add-location/create',withCredentials:true,data:dto})
    },
    
    async getUserfromToken(dto:UserFromToken){
        return axios({method:'post',url:baseURL+'auth/getUser',withCredentials:true, data:dto
     })
    },
    async deleteLocation(dto:{id:string}){
        return axios({method:'post',url:baseURL+'add-location/delete',withCredentials:true,data:dto})
    } ,
    async getLocation(dto:{id:string}){
        return axios({method:'get',url:baseURL+`add-location/find?id=${dto.id}`,withCredentials:true})
    } ,
    async logout(){
        return axios({method:'post',url:baseURL+'auth/logout',withCredentials:true})
    },
    async signout(dto:{id:string}){
        return axios({method:'post',url:baseURL+'user/delete',withCredentials:true,data:dto})
    } 

}