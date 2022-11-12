import { gql } from "@apollo/client"

export const SAVE_PLACE_MUTATION = gql`
    mutation save($data: SavePlaceRequest!){
        save(data: $data)
    }
`

