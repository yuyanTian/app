import React from 'react'
import styles from "./ErrorText.module.css"

interface Props {
    text: string
}

const ErrorText: React.FC<Props> = ({ text }) => {
    return (
        <>
            {
                text
                    ? <p className={styles.text}>*   {text}</p>
                    : null
            }
        </>
    )
}

export default ErrorText
