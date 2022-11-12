import React, { useState } from 'react'
import { Formik } from "formik"
import styles from "./LoginForm.module.css"
import ErrorText from '../ErrorText/ErrorText'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../../query/User/LoginMutation'
import { useRouter } from "next/router"

interface Props {
    toRegister: () => void
}

interface LoginResponse {
    username: string
    email: string
}

interface LoginRequest {
    data: {
        email: string
        password: string
    }
}

const LoginForm: React.FC<Props> = ({ toRegister }) => {
    const [ErrorMessage, setErrorMessage] = useState<string>("")
    const [login] = useMutation<
        LoginResponse,
        LoginRequest
    >(LOGIN_MUTATION);

    const router = useRouter()

    const onSubmit = async ({ email, password }, { setSubmitting }) => {
        setSubmitting(true)
        try {
            const result = await login({
                variables: {
                    data: { email, password }
                }
            })
            console.log(result)
            router.reload()
        }
        catch (err) {
            if (err) {
                setErrorMessage('Invalid Email Or Password')
            }
        }
        setSubmitting(false)
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>LOGIN</header>
                <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
                    {
                        ({ values, handleChange, handleSubmit, isSubmitting }) => (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter E-Mail"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange} />
                                </div>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter Password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange} />
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    <ErrorText text={ErrorMessage} />
                                </div>
                                <button className={styles.button} type="submit" disabled={isSubmitting}>LOGIN</button>
                            </form>
                        )
                    }
                </Formik>
                <p className={styles.helperText}>Don't have Account? <span onClick={toRegister}> SignUp</span></p>
            </div>
        </>
    )
}

export default LoginForm
