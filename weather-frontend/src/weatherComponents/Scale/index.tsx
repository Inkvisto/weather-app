import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'

import styles from './Scale.module.scss'

interface ScaleProps {
   scaleType: string;
   scaleSide: string;
}


export const Scale = ({ scaleType, scaleSide }: ScaleProps) => {

   const [sideStyles, setSideStyles] = React.useState('')
   const [scaleHovering, setScaleHovering]: any = React.useState()
   const scale = React.useRef<HTMLDivElement>(null)

   const data = useSelector((state: RootState) => state.data)


   const pressureFormula = (pressure: number) => {
      const minPressure = 870
      const maxPressure = 1080
      const pressurePercents = (Math.round((((maxPressure - minPressure) - (maxPressure - pressure)) / (maxPressure - minPressure)) * 100))
      const height = 125 / 100 * pressurePercents

      if (scale.current) scale.current.style.height = `${height + 25}px`

      return pressurePercents
   }

   const humidityFormula = (humidity: number) => {
      const height = humidity
      if (scale.current !== null) scale.current.style.height = `${height + 25}px`

   }

   React.useEffect(() => {
      if (scaleSide === 'right') {
         setSideStyles('rightScaleContainer')
      } else {
         setSideStyles('leftScaleContainer')
      }
   }, [])

   React.useEffect(() => {

      if (typeof data.main === 'object') {
         if (scaleType === 'pressure') {
            pressureFormula(data.main.pressure)
         } else if (scaleType === 'humidity') {

            humidityFormula(data.main.humidity)
         }
         else {
            const randomHeight = (min: number, max: number) => {
               return Math.floor(Math.random() * (max - min)) + min;
            }
            if (scale.current !== null) scale.current.style.height = `${randomHeight(30, 100)}px`
         }
      }
   }, [data])


   return (

      <div>
         <div className={styles[sideStyles]}>
            <div className={styles.scale}>
               <div ref={scale} className={styles.inputOfScale}></div>
            </div>
         </div>
      </div>

   )

}


