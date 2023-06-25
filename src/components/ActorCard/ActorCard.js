import React from 'react'
import styles from './ActorCard.module.css'
import ImagePlaceholder from '../Images/placeholder-person.png'

const ActorCard = (props) => {

const Image = props.actorImage?`https://image.tmdb.org/t/p/w200/${props.actorImage}`: ImagePlaceholder

return (
    <div className={styles.container}>
        <img className={styles.image} src={Image} alt='ActorImage'/>
        <h5>{props.actorCharacter}</h5>
        <p>{props.actorName}</p>
    </div>
  )
}

export default ActorCard