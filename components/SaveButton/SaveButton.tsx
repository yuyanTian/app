import React from 'react'
import styles from "./SaveButton.module.css"
import { SAVE_PLACE_MUTATION } from "./../../query/Place/SavePlaceMutation"
import { useMutation } from '@apollo/client'
import { MapStateProps } from '../../types/map'
import { useAuth } from '../../lib/useAuth'
import { userVar } from '../../local/cache'

interface Props{
    mapState: MapStateProps
}

interface SavePlaceRequest{
    data: {
        placeName
        address: string
        lat: number
        lng: number
        userId: number
    }
}

type SavePlaceReponse = boolean 

const SaveButton:React.FC<Props> = ({ mapState: { address, mapPosition:{ lat, lng}, } }) => {
    const { loading } = useAuth()
    const [savePlace] = useMutation<SavePlaceReponse, SavePlaceRequest>(SAVE_PLACE_MUTATION)
    const user = userVar()
    
    const save = async () =>{
        console.log(user)

        if(!address || address.length <= 0){
            alert('Select Location With Map')
        }
        try{
            await savePlace({variables: {
                data : {
                    placeName: address,
                    address,
                    lat,
                    lng,
                    userId: parseInt(user.self.userId)  
                } 
            }})
        }
        catch(err){
            if(err){
                alert(err.message)
            }
        }
    }
    
    return (
        <div className={styles.container}>
          <button onClick={ 
            save
          } className={styles.saveButton} disabled={loading}> Save This Location </button>  
        </div>
    )
}

export default SaveButton
