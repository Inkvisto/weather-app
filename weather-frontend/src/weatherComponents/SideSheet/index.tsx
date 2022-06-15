import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'

import styles from './SideSheet.module.scss'


export const SideSheet = () => {
    const filteredTemperature = useSelector((state: RootState) => state.filteredTemperature)
    const data = useSelector((state: RootState) => state.data)


    return (
        (filteredTemperature.current !== undefined) && (data.cod === 200) ? (
            <div className={styles.container}>
                <article className={styles.descriptionPart}>
                    <div className={styles.topEdge}></div>
                    <figure>
                        <img className={styles.icon} src={`/icons/${data.weather?.[0].icon}.png`} />
                        <figcaption>{data.weather?.[0].description}</figcaption>
                    </figure>
                </article>
                <article className={styles.temperaturePart}>
                    <div className={styles.bottomEdge}></div>
                    <p>{filteredTemperature.current}</p>
                </article>
            </div>
        ) : null
    )


}