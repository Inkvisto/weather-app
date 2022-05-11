import React from 'react'

import setTemperatureFilter from '../../redux/features/weather/SetTemperatureFilter'
import { WeatherFilters } from '../../redux/actionTypes'
import { useDispatch } from 'react-redux'
import styles from './DegreeFilter.module.scss'


const DegreeFilter = () => {
  const [number,setNumber] = React.useState(3)
  const[degree,setDegree] = React.useState(WeatherFilters.KELVIN)
  const[name,setName] = React.useState('Celsium')
  const dispatch = useDispatch()


  
  const degreeChange = () => {
    dispatch({type:'setFilter/setTemperatureFilter',payload:degree})

    if(number === 1){
      setName('Fahrenheit')
      setDegree(WeatherFilters.CELSIUM)
      setNumber(2)
      
    }

    else if(number === 2){
      setName('Celsium')
      setNumber(3)
      setDegree(WeatherFilters.KELVIN)
    
    }
      
    else if(number === 3){
      setName('Kelvin')
      setDegree(WeatherFilters.FAHRENHEIT)
      setNumber(1)
      
    }

    else{
      throw new Error('Error with degrees')
    }
 
  }



  return(
    <div>
   
          <button 
          className={styles.main}
            onClick={degreeChange}
        >
          {name}
          </button>

    </div>
  ) 
}


export default DegreeFilter
