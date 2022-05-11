import React from 'react'
import { AddLocation } from '../../weatherComponents/AddLocation'


import DailyWeather from '../../weatherComponents/DailyWeather'
import styles from './Main.module.scss'


const Main = () => {
    
   
    
        return(
            <div className={styles.container}>
              <DailyWeather   />
              <AddLocation />   
            </div>
        )
   

}

export default Main
