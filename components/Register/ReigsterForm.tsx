import React, { useState } from 'react'
import { Formik } from "formik"
import styles from "./RegisterForm.module.css"
import ErrorText from '../ErrorText/ErrorText'
import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../../query/User/RegisterMutation'
import { useRouter } from "next/router"

interface Props {
    toLogin: () => void
}

interface RegisterReponse {
    username: string
    email: string
}

interface RegisterRequest {
    data: {
        username: string
        email: string
        password: string
        confirmPassword: string
    }
}

const RegisterForm: React.FC<Props> = ({ toLogin }) => {
    const router = useRouter()
    const [ErrorMessage, setErrorMessage] = useState<string>("")

    const [register] = useMutation<RegisterReponse, RegisterRequest>(REGISTER_MUTATION)

    const onSubmit = async ({ username, email, password, confirmPassword }, { setSubmitting }) => {
        setSubmitting(true)
        try {
            const result = await register({
                variables: {
                    data: { username, email, password, confirmPassword }
                }
            })
            router.reload()
        } catch (err) {
            if (err) {
                setErrorMessage(err.message)
                console.log(err.data)
            }
        }

        setSubmitting(false)
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>Sign-Up</header>
                <Formik initialValues={{ username: "", email: "", password: "", confirmPassword: "" }} onSubmit={onSubmit}>
                    {
                        ({ values, handleChange, handleSubmit, isSubmitting }) => (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter Username"
                                        name="username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange} />
                                </div>
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
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter Password Again"
                                        name="confirmPassword"
                                        type="password"
                                        value={values.confirmPassword}
                                        onChange={handleChange} />
                                </div>
                                <div>
                                    <ErrorText text={ErrorMessage} />
                                </div>
                                <button className={styles.button} type="submit" disabled={isSubmitting}>SIGN-UP</button>
                            </form>
                        )
                    }
                </Formik>
                <p className={styles.helperText}>Already Have an Account? <span onClick={toLogin}>Log-In</span></p>
            </div>
        </>
    )
}

export default RegisterForm

