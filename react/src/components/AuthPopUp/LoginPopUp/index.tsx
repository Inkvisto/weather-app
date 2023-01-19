import React from 'react'

import { useForm } from "react-hook-form";
import { AddLocationApi } from '../../../api/AddLocation.api';
import { LoginUserDto, RegisterUserDto, ServerError, User } from '../../../api/types'
import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { LoginSchema } from '../../../schemas/loginValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { loadloginSuccess } from '../../../redux/features/login/loginSuccess';
import TextField from '@mui/material/TextField';
import axios, { AxiosError } from 'axios';
import Button from '@mui/material/Button';

import '../AuthPopUp.scss'

interface LoginPopUpProps {
  getUserAtLogin:(user: User) => void
}

export const LoginPopUp = ({ getUserAtLogin }: LoginPopUpProps) => {
  const [alertMessage, setAllertMessage] = React.useState<React.CSSProperties>({display:'none'})
  const [errorText, setErrorText] = React.useState<string>()
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserDto>({
    resolver: yupResolver(LoginSchema)
  });

  const dispatch = useDispatch()

  const onLoginSubmit = async (dto: LoginUserDto) => {
    await AddLocationApi.login(dto)
      .then((data: User) => {
        dispatch(loadloginSuccess(data))
        getUserAtLogin(data)
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          const serverError = err as AxiosError<ServerError>;
          setAllertMessage({ display: 'flex', marginTop: '20px' })
          console.warn(serverError.response);

          if (serverError.response) {
            setErrorText(serverError.response?.data.message)
          } else {
            setErrorText('Server is possibly offline, we fix it problem soon')
            console.warn('Server possibly offline', err.stack)
          }
        }
      })
  }


  return (
    <div>
      <span className='loginText'>Login</span>
      <form onSubmit={handleSubmit(onLoginSubmit)} className='form'>
        <div className='emailContainer'>
          <TextField
            InputLabelProps={{ style: { marginTop: '-3px' } }}
            id='emailInput'
            variant="outlined"
            {...register("email", { required: true, maxLength: 25 })}
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
            {...register("password", { minLength: 8 })}
            required
          />
        </div>
        <Alert sx={alertMessage} severity="error">{errorText}</Alert>
        <span className='error'>{errors.password?.message}</span>
        <Button sx={{ position: 'absolute', width: '120px', bottom: '20px',left:'24px' }}
          type="submit"
          variant='contained'
        >Login</Button>
      </form>
    </div>)
}