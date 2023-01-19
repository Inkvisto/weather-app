import { DailyWeatherData } from '../DailyWeather/DailyWeatherData'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

import styles from './DegreeList.module.scss'

type DegreeListProps = {
  datatype: string
}

const DegreeList = ({ datatype }: DegreeListProps) => {

  const filteredTemperature = useSelector((state: RootState) => state.filteredTemperature)

  if (datatype === 'data' && filteredTemperature !== undefined) {
    return null
  } else if (datatype === 'dailyWeather' && filteredTemperature.dailyWeather !== undefined) {        
    return (
      <article className={styles.container}>
      <h4 className={styles.text}>For the 3 days:</h4>
        <DailyWeatherData />
      </article>
    )
  } else {
    return <article style={{width:'500px',height:'404px'}}></article>
  }


};


export default DegreeList;
