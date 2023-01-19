import { AddLocationBlock } from './AddLocationBlock'
import { AddLocationButton } from './AddLocationButton'

import styles from './AddLocation.module.scss'


export const AddLocation = () => {

    return (
        <div className={styles.main}>
            <AddLocationBlock />
            <AddLocationButton />
        </div>
    )

}