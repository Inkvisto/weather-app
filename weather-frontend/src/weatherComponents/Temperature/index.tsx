import React from 'react'

import DegreeFilter from './DegreeFilter'

import styles from './TemperatureApi.module.scss'
import { useSelector } from 'react-redux'
import DegreeList from './DegreeList'


export const Temperature = () => {
      return (
      <div className={styles.container}>
        <DegreeFilter />
      </div>)
    

    }
  



 

