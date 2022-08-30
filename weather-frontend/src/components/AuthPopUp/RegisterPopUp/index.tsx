import { Alert, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddLocationApi } from "../../../api/AddLocation.api";
import { RegisterUserDto, ServerError } from "../../../api/types";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from "../../../schemas/loginValidation";
import axios, { AxiosError } from "axios";
import React from "react";

import '../AuthPopUp.scss'


type RegisterPopUpProps = {
  loginRedirect: ()=>void
}
const RegisterPopUp = ({ loginRedirect }: RegisterPopUpProps) => {
  const [alertMessage, setAllertMessage] = React.useState<React.CSSProperties>({ display: 'none' })
  const [errorText, setErrorText] = React.useState<string>()


  const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserDto>({
    resolver: yupResolver(RegisterSchema)
  });


  const onRegisterSubmit = async (dto: RegisterUserDto) => {
    try {
      const data = await AddLocationApi.register(dto)
 
     
    if (data !== undefined) {
        loginRedirect()
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAllertMessage({ display: 'flex', marginTop: '20px' })
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          setErrorText(serverError.response.data.message)
          console.warn('Login Error', error)
        } else {
          setErrorText("Server is possibly offline, we fix it problem soon")
        }
      }
    }
  }


  return (
    <div> <span className='registerText'>Registration</span>
      <form onSubmit={handleSubmit(onRegisterSubmit)} className='form'>
        <div className='usernameContainer'>
          <TextField
            InputLabelProps={{ style: { marginTop: '-3px' } }}
            id='usernameInput'
            variant="outlined"
            {...register("username", { required: true })}
            label="Username"
          />
        </div>
        <span className='error'>{errors.username?.message}</span>
        <div className='emailContainer'>
          <TextField
            InputLabelProps={{ style: { marginTop: '-3px' } }}
            id='emailInput'
            variant="outlined"
            {...register("email", { required: true })}
            label="Email"
          />
        </div>
        <span className='error'>{errors.email?.message}</span>
        <div className='passwordContainer'>
          <TextField
            InputLabelProps={{ style: { marginTop: '-3px' } }}
            id="passwordInput"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            {...register("password", {})}
          />
        </div>
        <Alert sx={alertMessage} severity="error">{errorText}</Alert>
        <span className='error'>{errors.password?.message}</span>
        <Button sx={{ position: 'absolute', width: '140px', bottom: '20px', left: '24px' }}
          type="submit"
          variant='contained'
        >Register</Button>
      </form>
    </div>

  )

}


export default RegisterPopUp