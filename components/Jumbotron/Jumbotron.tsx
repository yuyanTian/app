import React from 'react'
import styles from "./Jumbotron.module.css"

function Jumbotron() {
    return (
        <div className={styles.container}>
            <section className={styles.img}>
                <img src="/main.svg" />
            </section>
        </div>
    )
}

export default Jumbotron
