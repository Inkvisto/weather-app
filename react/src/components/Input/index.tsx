import React from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

import styles from './Input.module.scss'


type InputProps = {
   onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
   inputStyle: string;
}


export const Input = (props: InputProps) => {
   const [caption, setCaption] = React.useState('Try to write some city name')
   const input = React.useRef<HTMLInputElement>(null)

   const data = useSelector((state: RootState) => state.data)


   React.useEffect(() => {
      if (!input.current) throw Error('inputRef is not asigned')
      input.current.focus()
   }, [])


   React.useEffect(() => {
      if (data.cod === '404') {
         setCaption('Wrong city name')
      }
      else {
         setCaption('Try to write some city name')
      }
   }, [data.cod])


   return (
      <div className={styles.container}>
         {props.inputStyle === 'locationSearch' ? null :
            <div className={styles.description}>
               <span className={styles.caption}>{caption}</span>
               {data.name ? (<div className={styles.cityName}><LocationOnIcon color='action' /> <h1> {data.name}</h1></div>) : null}
            </div>
         }
            <input
               ref={input}
               className={styles[props.inputStyle]}
               type='text'
               defaultValue='Kiev'
               onKeyPress={props.onKeyPress}
            />
        
      </div>)
}



