import React from 'react'

import {Header} from './Header'
import Main from './Main'
import styles from './App.module.scss'

interface AppProps {
  containerStyles:string;
}


const  EnchancedApp = (App:any) => {
  return function dragAndDropController(){
    return <App />
  }
}




const App = ({containerStyles}:AppProps) => (
  <div className={styles.container}>
    <Header sideSheetStyle='' />
  <Main />
  </div>
)




export default EnchancedApp(App)
