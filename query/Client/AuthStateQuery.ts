import { gql } from "@apollo/client";

export const GET_AUTH_STATE = gql`
     query GetAuthState {
    authState @client 
  }
`