export enum AuthState {
    LOGIN,
    REGISTER
}

export interface SelfQueryDataProps{
    self: {
        userId: string
        username: string
        email: string
        __typename: any
    }
}
