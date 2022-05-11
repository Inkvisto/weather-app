import { ConstructionOutlined } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { data } from '../../redux/redux-saga/selectors'
import { RootState } from '../../redux/reducers/rootReducer'
import styles from './FalloutWeather.module.scss'
import { Scale } from './scale'
import { languageChange } from '../../Intl/language'



export const FalloutWeather = () => {
    const data = useSelector((state:RootState)=>state.data)
    const scale = React.useRef<HTMLDivElement>(null)
const [h,setH] = React.useState(10)
    const precipitation = () => {
        if(data.snow){
            const arr = Object.entries<string>(data.snow)
            return {snow:arr}
        }else if(data.rain){
            const arr = Object.entries<string>(data.rain)
            return {rain:arr}
        }
        else if(data.snow && data.rain){
            const snow = Object.entries<string>(data.snow)
            const rain = Object.entries<string>(data.rain)
            return {snow:snow,rain:rain}
           
        }
        else{
            return null
        }
    }

    const check = () =>{
        if(data.snow !== undefined){
            return precipitation()!.snow
        } else if(data.rain !== undefined){
            return precipitation()!.rain
        }
        else{
            return null
        }
        
    }




if(typeof data.wind !== 'undefined'&& data.main !== undefined && data.cod === 200){

    const weatherIndicationLang = Object.values(languageChange().wind)
    const wind = data.wind
    const windDescription = weatherIndicationLang
   const mainDescription = weatherIndicationLang.slice(3,5)
   const windCheck = () => {
       if(wind.gust === undefined){
           return windDescription.slice(0,2)
       }
       return windDescription.slice(0,3)
   }
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.wind}>
                
            <ul>{windCheck().map((e:any,i)=><li key={i}>
                {e}:
            </li>)}</ul>
                <ul>
                    <li>{wind.speed}<span className={styles.speedMarks}> m/s</span></li>
                    <li>{wind.deg}&deg;</li>
                    {wind.gust !== undefined ?  <li>{wind.gust}<span className={styles.speedMarks}> m/s</span></li>:null}
                    </ul>

                    </div>
                <div style={{display:'flex',position:'absolute',top:'90px'}} >
                <Scale scaleType='pressure' scaleSide='left'/>
                    <Scale scaleType='humidity' scaleSide='left'/>
                    <Scale scaleType='normal' scaleSide='left'/>
                    <Scale scaleType='normal' scaleSide='left'/>
                    <Scale scaleType='normal' scaleSide='left'/>
                    <Scale scaleType='normal' scaleSide='left'/>
                
                </div>
            </div>
            
            <div className={styles.rightSide}>
            <div className={styles.main}>
                <ul>
                    {mainDescription.map((e:any,i,a)=>
                        <li key={i}>{e}:</li>
                    )}
                </ul>
                <ul>
                    <li>{data.main.pressure}<span> hPa</span></li>
                <li>{data.main.humidity}<span>%</span></li>
                </ul>
                </div>
                <div style={{display:'flex',position:'absolute',top:'90px'}}>
                    <Scale scaleType='pressure'  scaleSide='right'/>
                    <Scale scaleType='humidity'  scaleSide='right'/>
                    <Scale scaleType='normal'  scaleSide='right'/>
                    <Scale scaleType='normal'  scaleSide='right'/>
                    <Scale scaleType='normal'  scaleSide='right'/>
                      <Scale scaleType='normal'  scaleSide='right'/>
                </div>
             <div>{check()}</div>
            </div>
        </div>
    )
}else{
    return null
}
}