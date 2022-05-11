import React, { KeyboardEventHandler } from 'react'

import styles from './Input.module.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';


type InputProps = {
  
   onKeyPress?:(e: React.KeyboardEvent<HTMLInputElement>) => void;

   
   inputStyle:string;
}

export const Input = (props:InputProps) =>{
   const [text,setText] = React.useState('Try to write some city name')
   const [name,setName] = React.useState('')
   const input = React.useRef<HTMLInputElement>(null) 

   const data = useSelector(state => state)
   const cod:number | string | undefined = useSelector((state:RootState) => state.data.cod)
   const city = useSelector((state:RootState) => state.data.name)
   //const  oneCallData = useSelector<RootState>(state => state.oneCallData)

   React.useEffect(()=>{
      if(!input.current) throw Error('inputRef is not asigned')
      input.current.focus()
   },[])


React.useEffect(
   ()=>{
      if(cod === 200 && city !== undefined){
         let cityName = city
         setName(cityName)
         setText('Try to write some city name')
      }
       else if(cod === '404'){
         setText('Wrong city name')
      } else{
         setText('Try to write some city name')
      }
   },[data,city,cod])



return(
   <div className={styles.flex}>
      
      {props.inputStyle === 'locationSearch' ? null  :
      <div className={styles.description}>
         <div  className={styles.text}>{text}</div>
      <LocationOnIcon color ='action' />
      <h1 className={styles.cityName}>{name}</h1>
      </div>
}
      <div className={styles.input}>
         <input
      
         ref={input}
         className={styles[props.inputStyle]} 
         type='text'
         onKeyPress={props.onKeyPress} 
         />
      </div>
   </div>)
}



