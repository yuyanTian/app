import { gql } from "@apollo/client"

export const DELETE_PLACE_MUTATION = gql`
    mutation delete($placeId: Float!){
        delete(placeId: $placeId)
    }
`


