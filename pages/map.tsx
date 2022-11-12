import { useQuery } from '@apollo/client'
import styles from "./../styles/Index.module.css"
import { Listing_QUERY } from '../query/Listing/Listing'
import Loading from '../components/Loading/Loading'
import ErrorText from '../components/ErrorText/ErrorText'
import { getAllListing, AllListing, brokersInfot } from '../types/place'

export default function Index() {     
    const { loading, error, data } = useQuery<getAllListing>(Listing_QUERY)
     
    console.log('data=',data)

    if (loading) return <div>Loding ...<Loading/></div>
    if (error) return <ErrorText text={'error'} />
    
    return (
        <div className={styles.longText}>
            { JSON.stringify(data) }
        </div>
    )
}
