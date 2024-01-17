import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ movie }) => {

   return (
      <Link to={`/movie/${movie.id}`}>
         <div className="cards">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`} />
            <div className="cards__overlay">
               <div className="card__title">{movie ? movie.original_title : ''}</div>
               <div className="card__runtime">
                  {movie ? new Date(movie.release_date).getFullYear() : ''}
                  <span className='card__rating'>
                     {movie ? (movie.vote_average).toFixed(1) : ''}
                  </span>
               </div>
               <div className="card__description">
                  {movie ? movie.overview.slice(0, 100) + '...' : ''}
               </div>
            </div>
         </div>
      </Link>

   )
}

export default Card