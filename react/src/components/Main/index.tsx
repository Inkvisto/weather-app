import { AddLocation } from '../../weatherComponents/AddLocation'
import DailyWeather from '../../weatherComponents/DailyWeather'

import styles from './Main.module.scss'


const Main = () => {
  return (
    <main className={styles.container}>
      <DailyWeather />
      <AddLocation />
    </main>
  )
}

export default Main
