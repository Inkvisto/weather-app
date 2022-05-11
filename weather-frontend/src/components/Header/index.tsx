import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { loadSearchValue } from '../../redux/features/weather/SearchInput';

import styles from './Header.module.scss'


import { Input } from '../Input'
import { FalloutWeather } from '../../weatherComponents/FalloutWeather';
import { Temperature } from '../../weatherComponents/Temperature';
import { SideSheet } from '../../weatherComponents/SideSheet';
import { RootState } from '../../redux/reducers/rootReducer';
import { AuthPopUp } from '../AuthPopUp';
import { languageChange } from '../../Intl/language';


interface HeaderProps {
  sideSheetStyle:string;
}



export const Header = ({sideSheetStyle}:HeaderProps) => {


  const inputText = (type:string) => {
    let switchInputText = {
      'emptyCityName':
       ()=> <div className={styles.emptyCityName}>City Name is empty :(</div>,
       'correctCityName':
       ()=><div>
                <div className={styles.filter}>
                <Temperature />
                </div>
             </div>,
        'wrongCityName':
        ()=><div className={styles.wrongCityName}>
                Here must be a temperature,<br /> but you write wrong city name
              </div>
    } 

    
      return (switchInputText[type as keyof typeof switchInputText] || switchInputText['wrongCityName'])()
  }


  const date = new Date()
  
  const data= useSelector((state:RootState)=>state.data)



  const dispatch = useDispatch()
 
  let day = date.getDate()
  const month =languageChange().months[date.getMonth()] 




  const onKeyPress= (e:React.KeyboardEvent<HTMLInputElement> ) => {
    if(e.key === 'Enter'){
      
      dispatch(loadSearchValue((e.currentTarget).value))
    } 
  }
  function cityNameRender(){
   if(data.name !== undefined){
    return inputText('correctCityName')
  }else if(data.cod === '404'){
    return inputText('wrongCityName')
  }else if(data.cod === '400'){
    return inputText('emptyCityName')
  }
}



  return(
    <div className={styles.container}>
      <div className={styles.sideSheet}>
        <SideSheet />
      </div>
      <div className={styles.layer}>
        <div className={styles.flex}>
          <nav className={styles.location}>
        
            <Input inputStyle='search'  onKeyPress = {onKeyPress}  />
         
        
      
        
        {cityNameRender()} 

    
   
          </nav>
          
          <div className={styles.fallout}>
            <FalloutWeather />
          </div>
          <div className={styles.flexContainer}>
            <AuthPopUp />
          <div className={styles.date}><h1>{day}</h1><h2>{Object.values(languageChange().day)} <p>{month.charAt(0).toUpperCase() + month.slice(1)}</p></h2></div>
          </div>
        
        </div>
      </div>  
      <div className={styles.background}></div>

    
    </div>
  )
}


export default Header
