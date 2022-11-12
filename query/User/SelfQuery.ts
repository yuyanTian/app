import { gql } from "@apollo/client";

export const SELF_QUERY = gql`
{
    self{
        username
        userId
        email
    }
} 
`

export const SELF_PLACE_QUERY = gql`
   {
       self{
        	places{
            isLiked @client
                address
                placeName
                lat
                lng
                placeId
            }
       }
   } 
`

export const List_Query = gql`
   { 
        getAllListing {
            Latitude
            Longitude
            ListingID
            address
            brokers_info {
                name
                agency
                phone
            }
            available_spaces
        } 
   } 
`