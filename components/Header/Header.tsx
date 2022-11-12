import React from 'react'
import Head from "next/head"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <Head>
                <title>Skyrealm</title>
                <meta name="description" content="skyrealm" />
            </Head>
            <header className={styles.header}>Skyrealm</header>
        </>
    )
}

export default Header
