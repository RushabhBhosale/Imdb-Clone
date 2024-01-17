import React, { useEffect, useState } from 'react'
import './MovieList.css'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';

const MovieList = ({ count }) => {

  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'top_rated'}?api_key=b908b69cbf1920367b43cf85750d64db&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }


  return (
    <div className='movie__list'>
      <div className="list__title">{(type ? type : 'POPULAR').toUpperCase()}</div>
      <div className="list__cards">
        {movieList.slice(0, count).map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default MovieList