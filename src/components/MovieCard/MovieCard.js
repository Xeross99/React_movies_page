import React from 'react'
import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {

    const bannerImage = `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`

    return (
        <Link to={`/movie/${props.movies.id}`} >
        <div className={styles.container}>
            
            <h2>{props.movies.title}</h2>
            <p>Ocena: {props.movies.vote_average}/10</p>

            <img src={bannerImage} alt='movieImage'></img>

        </div>
        </Link>
    )
}

export default MovieCard