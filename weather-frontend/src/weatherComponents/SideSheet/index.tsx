import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import styles from './SideSheet.module.scss'
export const SideSheet = () => {

    const filteredTemperature = useSelector((state:RootState)=>state.filteredTemperature)
        if( filteredTemperature.currentTemperature[0] !== undefined){
            return (
                <div className={styles.container}>
                     <div className={styles.descriptionPart}><div className={styles.topEdge}></div>
                     <i className={styles.icon}><img src={`/icons/${filteredTemperature.currentTemperature[1]}.png`} /></i><p>{filteredTemperature.currentTemperature[2]}</p></div>
              <div className={styles.temperaturePart}><div className={styles.bottomEdge}></div><p>{filteredTemperature.currentTemperature[0]}</p></div>
            </div>
            )
        }else{
            return null
        }
  

}