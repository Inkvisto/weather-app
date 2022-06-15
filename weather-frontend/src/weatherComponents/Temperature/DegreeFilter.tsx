import React from 'react'

import { useDispatch } from 'react-redux'
import { WeatherFilters } from '../../redux/actionTypes/filters.const'

import styles from './DegreeFilter.module.scss'


const DegreeFilter = () => {
  const [number, setNumber] = React.useState(3)
  const [degree, setDegree] = React.useState(WeatherFilters.KELVIN)
  const [degreeName, setDegreeName] = React.useState('Celsium')
  const dispatch = useDispatch()

  const degreeChange = () => {
    dispatch({ type: 'setFilter/setTemperatureFilter', payload: degree })

    if (number === 1) {
      setDegreeName('Fahrenheit')
      setDegree(WeatherFilters.CELSIUM)
      setNumber(2)
    }
    else if (number === 2) {
      setDegreeName('Celsium')
      setNumber(3)
      setDegree(WeatherFilters.KELVIN)
    }
    else {
      setDegreeName('Kelvin')
      setDegree(WeatherFilters.FAHRENHEIT)
      setNumber(1)
    }
  }


  return (
    <button
      className={styles.main}
      onClick={degreeChange}
    >
      {degreeName}
    </button>
  )
}


export default DegreeFilter
