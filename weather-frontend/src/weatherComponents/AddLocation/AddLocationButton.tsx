import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Input} from '../../components/Input'
import { loadLocationSearchValue } from '../../redux/features/weather/LocationSearchInput'
import { RootState } from '../../redux/reducers/rootReducer'

import styles from './AddLocation.module.scss'



export const AddLocationButton = () => {
    const[keyPressValue,setKeyPressValue] = React.useState('')
    const state = useSelector((state:RootState)=>state)

 
    const dispatch = useDispatch()
  
    function showInput(){
      //  dispatch(addLocationData())
          
    }

    const onKeyPress= (e:React.KeyboardEvent<HTMLInputElement> ) => {
      if((e.currentTarget).value !== ''){
        if(e.key === 'Enter'){
        setKeyPressValue((e.currentTarget).value)
      }
    }else if((e.currentTarget).value === ''){
      setKeyPressValue('')
    }
    }

 const onSubmit = (e:React.SyntheticEvent) => {
   if(keyPressValue !== ''){
  dispatch(loadLocationSearchValue(keyPressValue))
   }
  e.preventDefault()
   
 }
    


    return(
        <div className={styles.buttonMain}>
          <form onSubmit={e=>{onSubmit(e)}} >

          <div>
             <Input inputStyle='locationSearch' onKeyPress={onKeyPress} />
          </div>
            <button type='submit' className={styles.addButton}>Add Location</button>

            </form>
        </div>
    )
}