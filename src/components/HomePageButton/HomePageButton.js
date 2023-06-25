import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePageButton.module.css'


const HomePageButton = () => {
    return (
        <Link to="/" className={styles.button}>
        back
        </Link>
    )
}

export default HomePageButton