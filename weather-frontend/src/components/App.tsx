import { Header } from './Header'
import Main from './Main'

import styles from './App.module.scss'


const App = () => (
  <div className={styles.container}>
    <Header />
    <Main />
  </div>
)


export default App
