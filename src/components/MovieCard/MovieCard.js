import React from 'react'
import styles from './MovieCard.module.css'

const MovieCard = (props) => {

    const bannerImage = `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`
    console.log(props.movies)
    console.log(props.movies.vote_averange)


    return (
        <div className={styles.container}>

            <h2>{props.movies.title}</h2>
            <p>Ocena: {props.movies.vote_average}</p>

            <img src={bannerImage} alt='movieImage'></img>

        </div>
    )
}

export default MovieCard