import React, { useEffect } from 'react'
import styles from "./Places.module.css"
import Place from '../Place/Place'
import { useQuery } from '@apollo/client'
import { SELF_PLACE_QUERY } from '../../query/User/SelfQuery'
import { SelfPlaceDataProps, PlaceInfo } from '../../types/place'
import Loading from '../Loading/Loading'

interface Props {
    data: {
        userId: string;
        username: string;
        email: string;
    }
}

const Places: React.FC<Props> = ({ data: { userId, username, email } }) => {
    // console.log(data)
    const { loading, data } = useQuery<SelfPlaceDataProps>(SELF_PLACE_QUERY)
       return (
        <div className={styles.container}>
            { data && data.self 
            ? 
            <div className={styles.innerContainer}>
                <div className={styles.header}>{username.toUpperCase()}'s Liked 👍</div>
                <section className={styles.places}>
                    {data.self.places.map((place: PlaceInfo) => (
                        <li className={styles.place} key={place.placeId}>
                            <Place placeId={place.placeId} placeName={place.placeName} lat={place.lat} lng= {place.lng} address={place.address} />
                        </li>
                    ))}
                </section>
            </div>
            : <Loading />
            }
        </div>
    )
}

export default Places
