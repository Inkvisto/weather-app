import styles from './SettingsButton.module.scss'
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const SettingsButton = () => {
        return(
            <div className={styles.container}>
                <Button disableRipple={true}>
               
     <Link  to="/about" >
      <SettingsIcon   style={{color:'#D3D3D3',fontSize:"45px"}} />
          </Link>

                </Button>
              
           
 
            </div>
        )
}

export default SettingsButton