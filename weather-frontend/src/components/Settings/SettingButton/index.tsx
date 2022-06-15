import styles from './SettingsButton.module.scss'
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';


const SettingsButton = () => {
    return (
        <div className={styles.container}>
            <Button disableRipple={true}>
                <SettingsIcon style={{ color: '#D3D3D3', fontSize: "45px" }} />
            </Button>
        </div>
    )
}


export default SettingsButton