import '../AuthPopUp/AuthPopUp.scss'
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, SubmitHandler } from "react-hook-form";
import { AccountCircle } from '@mui/icons-material';
import { AddLocationApi } from '../../api/AddLocation.api';
import {LoginUserDto, RegisterUserDto, ServerError} from '../../api/types'
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosError } from 'axios';
import SettingsButton from '../Settings/SettingButton';
import App from '../App';

import { setEnvironmentData } from 'worker_threads';
import { Avatar } from '@mui/material';
import Cookies from 'universal-cookie/es6';
import  { loadloginSuccess } from '../../redux/features/login/loginSuccess';
import { RootState } from '../../redux/reducers/rootReducer';
import {LoginSchema} from '../../schemas/loginValidation';
import { yupResolver } from '@hookform/resolvers/yup';





  const cookies = new Cookies();
export const LoginPopUp = () => {
    const[errorMessage,setErrorMessage] = React.useState('');
 


    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterUserDto>({
      resolver:yupResolver(LoginSchema)
    });

  const dispatch = useDispatch()


   

    const onLoginSubmit = async(dto:LoginUserDto) => {
      try {
        const data = await AddLocationApi.login(dto)
       
        
        cookies.set('authToken', data.accessToken , {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
        setErrorMessage('')
        const token:string = cookies.get('authToken')
        const cookie = {authToken:token}
        dispatch(loadloginSuccess(true))     
        
      } catch (error) {
  if(axios.isAxiosError(error)){
    const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        setErrorMessage(serverError.response.data.message)
        console.warn('Login Error',error)
      }
    }
  }
}

   

  
    return(
<div>
          
          <p className='loginText'>Login</p>
        <form  onSubmit={handleSubmit(onLoginSubmit)} className='form'>
        <div className='emailContainer'>
      
        <TextField 
          InputLabelProps={{style: {marginTop:'-3px'}}}
        id='emailInput'
        variant="outlined"
        
        {...register("email",{required:true,maxLength:25})} 
        label="Email"
          />

        </div>
        <p className='error'>{errors.email?.message}</p>
<div className='passwordContainer'>

<TextField
InputLabelProps={{style: {marginTop:'-3px'}}}
      id="passwordInput"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="outlined"
      {...register("password", {minLength:8 })}
      required
      
    />
        </div>
        <p className='error'>{errors.password?.message}</p>
        <Button sx={{position:'absolute',width:'140px',bottom:'20px'}}
         type="submit" 
         variant='contained'
         >Login</Button>

        </form>
        </div>    )
          }