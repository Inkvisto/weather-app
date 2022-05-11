import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddLocationApi } from '../../api/AddLocation.api'
import { loadLocationWeather } from '../../redux/features/weather/LocationWeather'
import { RootState } from '../../redux/reducers/rootReducer'
import styles from './AddLocation.module.scss'
import { AddLocationBlock } from './AddLocationBlock'
import { AddLocationButton } from './AddLocationButton'



export const AddLocation = () => {


  
    
   // if(locationData !== undefined){
    return(
        <div className={styles.main}>
          
           
                 <AddLocationBlock />
               
          
            <AddLocationButton />
        </div>
    )
   // } return(
    //      <div className={styles.emptyAddLocation}>

    //      </div>
  //  )
}