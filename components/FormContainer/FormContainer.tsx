import React, { useEffect, useState } from 'react'
import styles from "./FormContainer.module.css"
import LoginForm from '../Login/LoginForm'
import RegisterForm from '../Register/ReigsterForm'

import { AuthState } from '../../types/auth'
import { authStateVar } from '../../local/cache'
import { useQuery } from '@apollo/client'
import { GET_AUTH_STATE } from '../../query/Client/AuthStateQuery'

const FormContainer: React.FC = () => {
    const { data: { authState } } = useQuery<{ authState: AuthState} >(GET_AUTH_STATE)
    return (
        <>
            {
                authState === AuthState.LOGIN 
                 ? <LoginForm toRegister={() => { 
                     authStateVar(AuthState.REGISTER)
                    }} />
                : <RegisterForm toLogin={() => {
                    authStateVar(AuthState.LOGIN)
                 }} />

            }
        </>
    )
}

export default FormContainer
