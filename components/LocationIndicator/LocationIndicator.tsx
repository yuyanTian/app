import React from 'react'
import styles from "./LocationIndicator.module.css"

interface Props {
    address: string
}

const LocationIndicator:React.FC<Props> = ({ address }) => {
    return (
            <div className={styles.container}>
            { 
            address && address.length > 0 
            ?   <>
                    <p className={styles.location}>" {address} "</p>
                </>
            :   <>
                    <p className={styles.location}>Please Select a Location</p>
                </>   
            }
            </div> 
    )
}

export default LocationIndicator