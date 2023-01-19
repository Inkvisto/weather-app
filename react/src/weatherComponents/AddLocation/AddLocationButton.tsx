import { Alert } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Input} from '../../components/Input'
import { loadLocationSearchValue } from '../../redux/features/weather/LocationSearchInput'
import { RootState } from '../../redux/reducers/rootReducer'

import styles from './AddLocation.module.scss'



export const AddLocationButton = () => {
  const [loginAlert,setLoginAlert] = React.useState<JSX.Element | null>()
 
    const dispatch = useDispatch()

    const loginSuccess = useSelector((state:RootState)=>state.loginSuccess)
    
    const loginCheck = () => {
      loginSuccess.id === undefined ? setLoginAlert(<Alert severity="warning" sx={{height:15,display:'flex',alignItems:'center'}} >login first</Alert>) : setLoginAlert(null)
    }
    const onKeyPress= (e:React.KeyboardEvent<HTMLInputElement> ) => {
        if(e.key === 'Enter'){
          e.preventDefault()
          loginCheck()
          dispatch(loadLocationSearchValue((e.currentTarget).value))
      }
    }
    
 const onSubmit = (e:any) => {
  e.preventDefault()
  loginCheck()
   if(e.currentTarget[0].value !== '')
  dispatch(loadLocationSearchValue(e.currentTarget[0].value))  
 
 }
    

 React.useEffect(()=>{setLoginAlert(<div></div>)},[loginSuccess])
    return(
        <div className={styles.buttonMain}>
          <form onSubmit={e=>{onSubmit(e)}} >

          <div>
             <Input inputStyle='locationSearch' onKeyPress={onKeyPress} />
          </div>
          {loginAlert}
            <button type='submit' className={styles.addButton}>Add Location</button>

            </form>
        </div>
    )
}