import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePageButton.module.css'


const HomePageButton = () => {
    return (
        <div className={styles.container}>

            <Link to="/">Strona główna</Link>

        </div>
    )
}

export default HomePageButton