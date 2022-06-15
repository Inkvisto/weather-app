
import React from 'react'
import styles from './DragAndDrop.module.scss'




  interface DragAndDropMainProps {
    onDragStart:any;
    onDragOver:any;
    onDrop:any;
    onDragEnter:any;
    tasks:any;
    containerStyles:string;
  }


  



  const DragAndDropMain = ({containerStyles,onDragStart,onDragOver,onDrop,tasks,onDragEnter}:DragAndDropMainProps) => {
  
    

    return (<div className={styles[containerStyles]}>
      <div className={styles.sideSheetContainer}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
            onDrop(e, 'sideSheet');
          }}
          onDragEnter={(e) => {
            onDragEnter(e, 'sideSheet');
          }}
    ><div>
       {tasks.sideSheet}
       </div>
    </div>
    
  <div
  className={styles.inputContainer}
    onDragOver={(e)=>onDragOver(e)}
    onDrop={(e) => {
        onDrop(e, 'input');
      }}
       onDragEnter={(e) => {
            onDragEnter(e, 'input');
          }}
  >
   {tasks.input}
  </div>
  <div 
  className={styles.falloutWeatherContainer}
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e) => {
      onDrop(e, 'falloutWeather');
    }} 
     onDragEnter={(e) => {
            onDragEnter(e, 'falloutWeather');
          }}
    >
       {tasks.falloutWeather}</div>
       <div 
  className={styles.dayContainer}
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e) => {
      onDrop(e, 'day');
    }}   onDragEnter={(e) => {
            onDragEnter(e, 'day');
          }}
    >
       {tasks.day}</div>
       <div></div>
       <div 
  className={styles.dailyWeatherContainer}
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e) => {
      onDrop(e, 'dailyWeather');
    }}   onDragEnter={(e) => {
            onDragEnter(e, 'dailyWeather');
          }}
    >
       {tasks.dailyWeather}</div>
       <div 
  className={styles.emptyBlockContainer}
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e) => {
      onDrop(e, 'emptyBlock');
    }}   onDragEnter={(e) => {
            onDragEnter(e, 'emptyBlock');
          }}
    >
       {tasks.emptyBlock}</div>
       <div 
  className={styles.addLocationContainer}
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e) => {
      onDrop(e, 'addLocation');
    }}   onDragEnter={(e) => {
            onDragEnter(e, 'addLocation');
          }}
    >
       {tasks.addLocation}</div>
    </div>)
}

export default DragAndDropMain