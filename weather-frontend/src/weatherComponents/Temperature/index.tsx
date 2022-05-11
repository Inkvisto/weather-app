import React from 'react'

import DegreeFilter from './DegreeFilter'

import styles from './TemperatureApi.module.scss'
import { useSelector } from 'react-redux'
import DegreeList from './DegreeList'


export const Temperature = () => {

  const state = useSelector(s=>s)


      return (
      <div className={styles.container}>
        <DegreeList datatype={'data'}/>
        <DegreeFilter />
      </div>)
    

    }
  



 

