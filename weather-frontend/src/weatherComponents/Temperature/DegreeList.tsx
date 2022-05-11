import React from 'react'

import {DailyWeatherData} from '../DailyWeather/DailyWeatherData'
import styles from './DegreeList.module.scss'

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';



type DegreeListProps = {
  datatype:string
}

const DegreeList = ({datatype }:DegreeListProps)=> {

const d = useSelector((state:RootState)=>state)

const dailyWeather = d.filteredTemperature
const dor = d.filteredTemperature



if(datatype === 'data' && dor !== undefined) {

const tempArray = dor.currentTemperature.slice(0,1) 

 //const res = dor.currentNames.concat(...tempArray)

  return  <div className={styles.currentTempContainer}></div>
} else if(datatype === 'dailyWeather' && dailyWeather !== undefined){
   return ( 
  <div className={styles.dailyUl}>
     
       
      <DailyWeatherData />
     
            
    </div>
  )
        }else{
          return null
        }
      
 
};


export default DegreeList;
