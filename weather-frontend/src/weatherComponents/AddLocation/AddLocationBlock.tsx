import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers/rootReducer'
import styles from './AddLocation.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { AddLocationApi } from '../../api/AddLocation.api';
import { deleteLocationWeather } from '../../redux/features/weather/LocationWeather';
export const AddLocationBlock= () => {
   const [dataRecency,setDataRecency] = React.useState([])
   const locationDataTemperature = useSelector((state:RootState)=>state.filteredTemperature.location)
   const locationData:any = useSelector((state:RootState)=>state.locationWeather)
   const dispatch = useDispatch()

   const deleteLocation = async(index:any) => {  
    await AddLocationApi.deleteLocation(index) 
    dispatch(deleteLocationWeather(index.id))

   }




 
 
if(locationData.location !== undefined){
let locations = locationData.location.flat().map((e:any,i:any)=>{

    
    return(<div className={styles.blockContainer}>
        <i><img src={`/icons/${e.icon}.png`} /></i>
        <p>{locationDataTemperature.slice(0,2).flat(3)[i]}</p>
        <div>{e.place}</div>
        <span onClick={()=>deleteLocation(e)}><CloseIcon /></span>
        </div>
        )
})

return (<div><div className={styles.middleBlock}>{locations.slice(2,4)}</div>
<div>
{locations.slice(0,2)}</div>
</div>)

}


return<div></div>
}
   