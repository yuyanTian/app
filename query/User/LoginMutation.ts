import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
mutation login($data: LoginRequest!) {
  login(data: $data) {
    email
    username
  }
}
`
