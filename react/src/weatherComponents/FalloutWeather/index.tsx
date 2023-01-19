import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import { languageChange } from '../../Intl/language'
import { Scale } from '../Scale'

import styles from './FalloutWeather.module.scss'
import { WeatherDescription } from '../../redux/actionTypes/weatherData.type'


export const FalloutWeather = () => {
    const data = useSelector((state: RootState) => state.data)



    const weatherDescription: WeatherDescription = languageChange().weather
    const weatherArrayDescription = Object.values(weatherDescription)





    return (data.wind && data.main && (data.cod === 200) ? (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.main}>
                    <ul>
                        {weatherArrayDescription.slice(0, 3).map((e: string, i: number,) =>
                            <li key={i}>{e}:</li>
                        )}
                    </ul>
                    <ul>
                        <li>{data.wind.speed}<span> m/s</span></li>
                        <li>{data.wind.deg}<span>°</span></li>
                        <li>{data.wind.gust}<span> m/s</span></li>
                        <li>{data.snow && weatherArrayDescription[-1]}{data.snow?.['1h']}</li>
                    </ul>
                    <ul>

                    </ul>
                </div>
                <div style={{ display: 'flex', position: 'absolute', bottom: '10px' }} >
                    <Scale scaleType='pressure' scaleSide='left' />
                    <Scale scaleType='humidity' scaleSide='left' />
                    <Scale scaleType='normal' scaleSide='left' />
                    <Scale scaleType='normal' scaleSide='left' />
                    <Scale scaleType='normal' scaleSide='left' />
                    <Scale scaleType='normal' scaleSide='left' />
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.main}>
                    <ul>
                        {weatherArrayDescription.slice(3, 5).map((e: string, i: number,) =>
                            <li key={i}>{e}:</li>
                        )}
                        {data.rain && weatherArrayDescription[5] + ':'}
                    </ul>
                    <ul>
                        <li>{data.main.pressure + ' hPa'}</li>
                        <li>{data.main.humidity + '%'}</li>
                        <li>{data.rain && (data.rain?.['1h']) + ' mm'}</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', position: 'absolute', bottom: '10px' }}>
                    <Scale scaleType='normal' scaleSide='right' />
                    <Scale scaleType='normal' scaleSide='right' />
                    <Scale scaleType='normal' scaleSide='right' />
                    <Scale scaleType='normal' scaleSide='right' />
                    <Scale scaleType='normal' scaleSide='right' />
                    <Scale scaleType='normal' scaleSide='right' />
                </div>
            </div>
        </div>
    ) : null
    )
}