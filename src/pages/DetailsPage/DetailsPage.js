import React from 'react'
import styles from './DetailsPage.module.css'
import HomePageButton from '../../components/HomePageButton/HomePageButton'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import ActorCard from '../../components/ActorCard/ActorCard'

const DetailsPage = () => {

  const params = useParams();
  const movie = useFetch(`movie/${params.id}`)
  const image = `https://image.tmdb.org/t/p/original/${movie.data.poster_path}`

  const genres = movie.data.genres?.map((genres) => <span className={styles.genres} key={genres.name}>{genres.name.toLowerCase()}, </span>)
  const productionCompanies = movie.data.production_companies?.map((productionCompanies) => <span className={styles.genres} key={productionCompanies.name}>{productionCompanies.name}</span>)

  const people = useFetch(`movie/${params.id}/credits`)

  console.log(people)

  return (
    <div className={styles.container}>

      <div className={styles.info}>

        <div className={styles.left}>
          <img src={image} alt='MovieImage'></img>

        </div>
        <div className={styles.right}>

          <h1>{movie.data.original_title}</h1>

          <div className={styles.txt}>

            <p>{movie.data.overview}</p>

            <h5><b>release date: </b>{movie.data.release_date}</h5>
            <h5><b>genres: </b>{genres}</h5>
            <h5><b>production companies: </b>{productionCompanies}</h5>
            <h5><b>populularity: </b>{movie.data.popularity}</h5>
            <h5><b>budget: </b>{movie.data.budget}</h5>

          </div>

        </div>

      </div>

      <section className={styles.actorSection}>
        <h2>Actors</h2>

        <div className={styles.Containeractors}>
          {people.data.cast?.map((actor) => <ActorCard key={actor.id} actorCharacter={actor.character} actorName={actor.name} actorImage={actor.profile_path} />)}
        </div>
      </section>

      <HomePageButton />

    </div>
  )
}

export default DetailsPage