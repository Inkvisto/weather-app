import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'
import { AddLocationApi } from '../../api/AddLocation.api';
import { deleteLocationWeather, LocationsWeather } from '../../redux/features/weather/LocationWeather';

import styles from './AddLocation.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { User } from '../../api/types';


export const AddLocationBlock = () => {
    const locationTemperature = useSelector((state: RootState) => state.filteredTemperature.location)
    const locationData:LocationsWeather = useSelector((state: RootState) => state.locationWeather)
    const loginSuccess: User = useSelector((state: RootState) => state.loginSuccess)
    const dispatch = useDispatch()

    const deleteLocation = async (index: { id: string }, event: React.MouseEvent<HTMLSpanElement>) => {


        dispatch(deleteLocationWeather(index.id))

        await AddLocationApi.deleteLocation(index)
    }

    if (locationData.location !== undefined && locationTemperature !== undefined && loginSuccess !== null) {
        let locations = locationData.location.flat().map((e: any, i: any) => {
            return (<div className={styles.container}>
                <figure><img src={`/icons/${e.icon}.png`} /></figure>
                <p>{locationTemperature.temperature[i]}</p>
                <div>{e.place}</div>
                <span onClick={(event) => deleteLocation(e, event)}><CloseIcon /></span>
            </div>
            )
        })

        return (<div className={styles.blocksMain}> <div className={styles.middleBlock}>{locations.slice(2, 4)}</div>
            <div className={styles.rightBlock}>
                {locations.slice(0, 2)}</div>
        </div>)

    }


    return <div></div>
}
