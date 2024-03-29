import { useSelector } from 'react-redux'
import { language } from '../../Intl/language'
import { RootState } from '../../redux/reducers/rootReducer'
import styles from './DailyWeatherData.module.scss'



export const DailyWeatherData = () => {
    const dailyTemperature = useSelector((state: RootState) => state.filteredTemperature.dailyWeather)

    const daily = useSelector((state: RootState) => state.dailyWeather)
    let arr: JSX.Element[] = []

    daily.dataTime.map((e: number, i: number) => {
        const day = new Date(daily.dataTime[i] * 1000).toLocaleString(language, { 'weekday': 'long' })
        const upperLetterDay = day.charAt(0).toUpperCase() + day.slice(1)
        return arr.push(
            <li>
                <figure><img src={`/icons/${daily.icons[i]}.png`} alt='icons not loaded' /></figure>
                <div>
                    <span>{upperLetterDay}</span>
                    <span> {daily.description[i]}</span>
                </div>
                <p>{dailyTemperature && [dailyTemperature.temperature[i], ' - ', dailyTemperature.temperature[i + 3]]}</p>
            </li>
        )
    })


    return (
        <ul className={styles.main}>
            {daily.dataTime && arr}
        </ul>
    )
}