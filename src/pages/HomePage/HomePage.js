import React from 'react';
import styles from './HomePage.module.css';
import axios from 'axios';
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {

  const nowPlaying = useFetch("movie/now_playing");
  const popular = useFetch("movie/popular");

  console.log(popular.data);
  console.log(nowPlaying.data);

  return (
    <div>
    {nowPlaying.loading ? "Wczytywanie" : "Filmy 1 som"}
    {popular.loading ? "Wczytywanie" : "Filmy 2 som"}
    
    <div classname={styles.buttons}>
      
    </div>
  
    </div>
  )
}

export default HomePage