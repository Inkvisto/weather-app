import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../../Intl/language'
import { RootState } from '../../redux/reducers/rootReducer'
import styles from './DailyWeatherData.module.scss'



export const DailyWeatherData = () => {
const filteredTemperature = useSelector((state:RootState)=>state.filteredTemperature)

let arr:Array<JSX.Element> = []





filteredTemperature.dailyWeather.forEach((e,i,a)=>{

        const delimiterValue:string[] = []
        const unixTimestamp = a[3][i] * 1000
        const date = new Date(unixTimestamp)
        const day = date.toLocaleString(language,{'weekday':'long'}) 
        const upperLetterDay = day.charAt(0).toUpperCase() + day.slice(1)
if(typeof a[0][1][i]  !== 'undefined'){
        const secondDegreeArray:String = a[0][1][i] 
       if(secondDegreeArray.charAt(0) === '-'){
        delimiterValue.push('|')
       }else{
        delimiterValue.push(' - ')
       }
    }else{}


        return arr.push(<li>
            <i><img src={`/icons/${a[1][i]}.png`} /></i>
            <div>
                <p>{upperLetterDay}</p>
                <p> {a[2][i]}</p>
            </div>
        <span>{[a[0][0][i],delimiterValue,a[0][1][i]]}</span>
        </li> )
    })

    return(
        <ul className={styles.main}>
            {arr.slice(0,-1)}    
        </ul>
    )
}