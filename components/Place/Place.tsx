import React from 'react'
import styles from "./Place.module.css"
import { PlaceInfo } from '../../types/place'
import { useMutation } from '@apollo/client'
import { DELETE_PLACE_MUTATION } from '../../query/Place/DeletePlaceMutation'
import { mapStateVar } from '../../local/cache'

const Place: React.FC<PlaceInfo> = ({ placeId, placeName, address, lat, lng }) => {
    const [deletePlace] = useMutation<boolean, { placeId: number }>(DELETE_PLACE_MUTATION);
    const formatTitle = (title: string) => (title.length > 18 ? title.substring(0, 15) + "..." : title )
    
    return (
        <form className={styles.container}>
            <div onClick={()=>{
                mapStateVar({
                    address,
                    mapPosition:{
                       lat, lng 
                    }, 
                    markerPosition:{
                        lat,lng
                    }
                })
                
            }}className={styles.title}><span>{formatTitle(placeName)}</span></div>
            <button onClick={() => {
                deletePlace({ variables: {
                    placeId: parseInt(placeId)
                }})
            }} className={styles.deleteButton}>✂</button>
        </form>
    )
}

export default Place
