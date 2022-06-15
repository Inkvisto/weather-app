import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../App.module.scss'


const SettingsPage = () => {
    return (
        <div className={styles.container}>
            <Link to="/settings" >
                <Button>
                    dragAndDrop
                </Button>
            </Link>
            <div>changeLanguage</div>
            <div>countOfDays</div>
            <div>change scales(temperature)</div>
            <div>set default city to see</div>
        </div>
    )
}

export default SettingsPage