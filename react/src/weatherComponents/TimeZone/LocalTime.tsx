import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/rootReducer'



const LocalTime = () => {

  const data = useSelector((state:RootState)=>state.data)
 const oneCallData= useSelector((state:RootState)=>state.oneCallData)
 if(typeof data.dt === 'number'){
  let unixTimestamp = data.dt * 1000
  let timezone =oneCallData.timezone

  const date = new Date(unixTimestamp)


  let time = date.toLocaleString('en-us',{'hour':'numeric','minute':'numeric','second':'numeric','timeZoneName':'short',timeZone:timezone})
  

  return(
    <div>{`last time weather update in ${data.name}:` + time}</div>
  )

  }else{
    return null
  }
  
}


export default LocalTime
