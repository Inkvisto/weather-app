
import React from 'react'
import DegreeList from '../Temperature/DegreeList'
import styles from './index.module.scss'
const DailyWeather = () => {

        
    return (<div>
        <span className={styles.text}>For the 3 days:</span>
        <DegreeList datatype={'dailyWeather'}/>
        </div>)
 
}

export default DailyWeather