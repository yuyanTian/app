import { gql } from "@apollo/client"

export const Listing_QUERY = gql`
  query {
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