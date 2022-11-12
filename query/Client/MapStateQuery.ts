import { gql } from "@apollo/client";

export const GET_MAP_STATE = gql`
     query GetMapState {
    mapState @client 
  }
`