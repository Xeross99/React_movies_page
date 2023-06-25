import React from 'react';
import styles from './HomePage.module.css';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard';

const HomePage = () => {

  const nowPlaying = useFetch("movie/now_playing");
  const popular = useFetch("movie/popular");
  const upcoming = useFetch("movie/upcoming");

  const bannerMovie = nowPlaying.data[0];
  if (!bannerMovie) return;
  const bannerImage = `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`

console.log(bannerMovie)

  return (
    <div>
      <div style={{ backgroundImage: `url(${bannerImage})` }} className={styles.banner}>

        <h1 className={styles.title}>{bannerMovie.title}</h1>
        <p>&emsp;{bannerMovie.overview}</p>
        <Link to={`/movie/${bannerMovie.id}`} className={styles.link}>Watch</Link>
      </div>


      <section>
        <h2>Popular</h2>

        <div className={styles.container}>
          {popular.data.map((movie) => <MovieCard key={movie.id} movies={movie}/>)}
        </div>

      </section>

      <section>
        <h2>Upcoming</h2>

        <div className={styles.container}>
          {upcoming.data.map((movie) => <MovieCard key={movie.id} movies={movie}/>)}
        </div>

      </section>



    </div>
  )
}

export default HomePage