import { Button, Dialog, DialogActions, TextField } from "@mui/material";
import axios, { AxiosError } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddLocationApi } from "../../api/AddLocation.api";
import { RegisterUserDto, ServerError } from "../../api/types";
import { RootState } from "../../redux/reducers/rootReducer";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from "../../schemas/loginValidation";
import '../AuthPopUp/AuthPopUp.scss'


type RegisterPopUpProps = {
  loginRedirect:any
}
  const RegisterPopUp = ({loginRedirect}:RegisterPopUpProps) => {
    const[errorMessage,setErrorMessage] = React.useState('');
 

    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterUserDto>({
      resolver:yupResolver(RegisterSchema)
    });

  

    const onRegisterSubmit = async(dto:RegisterUserDto) => {
        try {
          const data =  await AddLocationApi.register(dto)
          if(data !== undefined){
            loginRedirect()
          }
          setErrorMessage('')
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
        <div> <p className='registerText'>Registration</p>
        <form  onSubmit={handleSubmit(onRegisterSubmit)} className='form'>
         
<div className='usernameContainer'>
          
          <TextField
            InputLabelProps={{style: {marginTop:'-3px'}}}
          id='usernameInput'
          variant="outlined"
          {...register("username",{required:true})} 
          label="Username"
            />
            </div>
            <p className='error'>{errors.username?.message}</p>

        <div className='emailContainer'>
      
        <TextField 
          InputLabelProps={{style: {marginTop:'-3px'}}}
        id='emailInput'
        variant="outlined"
        {...register("email",{required:true})} 
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
      {...register("password", {})}
    />
        </div>
        <p className='error'>{errors.password?.message}</p>
        <Button sx={{position:'absolute',width:'140px',bottom:'20px'}}
         type="submit" 
         variant='contained'
         >Register</Button>

        </form>
        
      </div>
     
    )
    
}


export default RegisterPopUp