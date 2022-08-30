import './AuthPopUp.scss'
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import SettingsButton from '../Settings/SettingButton';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { AddLocationApi } from '../../api/AddLocation.api';
import { useDispatch } from 'react-redux';
import RegisterPopUp from './RegisterPopUp';
import { LoginPopUp } from './LoginPopUp';
import { User } from '../../api/types';
import { loadloginSuccess } from '../../redux/features/login/loginSuccess';




export const AuthPopUp = () => {

  const [auth, setAuth] = React.useState<'login' | 'register'>('login')
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('registerLink')
  const [loginValue, setLoginValue] = React.useState<JSX.Element | null>(null)
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const openMenu = Boolean(anchorEl);
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

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

  const handleOpenProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  const getUserAtLogin = (user: User) => {
    userLoginned(user)
    handleClose()
  }

  const userLoginned = (user: User) => {
    setLoginValue(
      <>
        <div className='settings'>
          <SettingsButton />
        </div>
        <div className='avatar'>
          <button className='logoutButton' onClick={handleOpenProfile}>
            <Avatar
              sx={{ bgcolor: '#ffa7a7', width: '55px', height: '55px' }}>{user?.username?.charAt(0).toUpperCase()}</Avatar>
          </button>
        </div>
      </>
    )
  }

  const logout = async () => {
    await AddLocationApi.logout()
    dispatch(loadloginSuccess(null))
    setLoginValue(
      <button className='loginButton' onClick={handleOpen}>
        Login
      </button>
    )
    close()
  }

  const signout = async () => {
    await AddLocationApi.logout()
    await AddLocationApi.signout()
    close()
  }

  React.useEffect(() => {
    AddLocationApi.getUser()
      .then((user: User) => {
        dispatch(loadloginSuccess(user))
        userLoginned(user)
      })
      .catch((err: Error) => {
        AddLocationApi.refresh()
          .then((user: User) => {
            dispatch(loadloginSuccess(user))
            userLoginned(user)
          })
          .catch((err: Error) => {
            setLoginValue(
              <button className='loginButton' onClick={handleOpen}>
                Login
              </button>
            );
          })
      })
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='container'>
      <div className='menu'>
        <Menu
          style={{ marginTop: '5px' }}
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
          <MenuItem onClick={logout}>Log Out</MenuItem>
          <MenuItem onClick={signout}>Sign Out</MenuItem>
        </Menu>
      </div>
      {loginValue}
      <Dialog open={open} onClose={handleClose} className='content'>
        <DialogTitle>
          <p className={link}>
            <text onClick={setLoginPopUp}>Login</text> or<span onClick={setRegisterPopUp}> Register</span>
          </p>
        </DialogTitle>
        {auth === 'login' ? (
          <div>
            <LoginPopUp getUserAtLogin={getUserAtLogin} />
          </div>
        ) : (
          <div>
            <RegisterPopUp loginRedirect={setLoginPopUp} />
          </div>
        )}
        <DialogActions>
          <Button
            sx={{ width: '140px', mb: '12px' }}
            onClick={handleClose}
          >Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}



