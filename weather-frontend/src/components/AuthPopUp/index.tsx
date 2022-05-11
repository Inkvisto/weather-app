import './AuthPopUp.scss'
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { AddLocationApi } from '../../api/AddLocation.api';
import { useDispatch, useSelector } from 'react-redux';

import SettingsButton from '../Settings/SettingButton';
import { Avatar, Menu, MenuItem } from '@mui/material';
import Cookies from 'universal-cookie/es6';
import { RootState } from '../../redux/reducers/rootReducer';

import RegisterPopUp from '../RegisterPopUp';
import { LoginPopUp } from '../LoginPopUp';
import { loadloginSuccess } from '../../redux/features/login/loginSuccess';


  const cookies = new Cookies();
export const AuthPopUp = () => {
    const [auth,setAuth] = React.useState< 'login' | 'register'>('login')
    const [open, setOpen] = React.useState(false);
    const [link,setLink] = React.useState('registerLink')
    const[errorMessage,setErrorMessage] = React.useState('');
 

    const loginSuccess =  useSelector((state:RootState)=>state.loginSuccess)
    const handleClickOpen = () => {
      setOpen(true);
    };  


    const [loginValue,setLoginValue] = React.useState<JSX.Element | null | number>( <button className='loginButton'  onClick={handleClickOpen}>
    Login
  </button>)

  React.useEffect(()=>{
    
  },[loginSuccess])

  
const dispatch = useDispatch()


    const handleClose = () => {
       setOpen(false);
    };

    const setRegisterPopUp = () => {
        setAuth('register')
        setLink('loginLink')
    }
    const setLoginPopUp = () => {
      setAuth('login')
      setLink('registerLink')
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const close = () => {
    setAnchorEl(null);
  };



    React.useEffect(()=>{
      setOpen(false);
      async function getUserFromToken(){
        const token:string = cookies.get('authToken')
        const cookie = {authToken:token}
        const user:any = await AddLocationApi.getUserfromToken(cookie)
       

      
        
      setLoginValue(
        <div className='avatar'>   
        <button className='logoutButton'  onClick={handleClick}>      
              <Avatar
               sx={{ bgcolor:'#ffa7a7',width:'55px',height:'55px'}}>{user.data.username.charAt(0).toUpperCase()}</Avatar>
               </button> 
              </div>
        
      )

      }
    

      getUserFromToken().catch((e)=>
      setLoginValue(
        <button className='loginButton'  onClick={handleClickOpen}>
        Login
      </button>
       )
    )   
    },[loginSuccess])

   

 
const logout = async() => {
  await AddLocationApi.logout()
  dispatch(loadloginSuccess(false))
  close()
}

const signout = async() => {
  const token:string = cookies.get('authToken')
  const cookie = {authToken:token}
  const user:any = await AddLocationApi.getUserfromToken(cookie)
const userId = {
  id:user.data.id
}
  await AddLocationApi.logout()
  await AddLocationApi.signout(userId)
  close()
  dispatch(loadloginSuccess(false))
}

   

  
    return(
        <div >
           <div className='menu'
         >
      <Menu
        style={{marginTop:'5px'}}
        className='menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={close}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem  onClick={logout}>Log Out</MenuItem>
         <MenuItem onClick={signout}>Sign Out</MenuItem>
      </Menu>
    </div>
              {loginValue}
              
             
      <Dialog open={open} onClose={handleClose} className='content'>
        <DialogTitle><p  className={link}><text onClick={setLoginPopUp}>Login</text> or<span  onClick={setRegisterPopUp}> Register</span></p></DialogTitle>
       
       
          {auth === 'login' ? (
            <div>
                <LoginPopUp />
            </div>
          ) : (
           <div> 
             <RegisterPopUp loginRedirect={setLoginPopUp} />
            </div>
          )}
        <DialogActions>
          <Button 
          sx={{width:'140px',mb:'12px'}} 
          onClick={handleClose}    
          >Cancel</Button>
         
        </DialogActions>
      </Dialog>
      
              
            <div style={{position:'absolute',top:'27px',right:'90px'}}>
            <SettingsButton  />
            </div>
          </div>
    )
          }