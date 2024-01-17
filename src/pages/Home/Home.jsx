import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b908b69cbf1920367b43cf85750d64db&language=en-US')
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
  }, [])

  let count = 12

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title : ''}</div>
                <div className="posterImage__runtime">
                Release date: {movie ? new Date(movie.release_date).getFullYear() : 'not'}
                  <span>
                    {movie ? movie.vote_average : ''}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ''}
                </div>
                <div className="btn-box">
                  <div className="btn play"><i className="fa-solid fa-play"></i>Play</div>
                  <div className="btn info"><i className="fa-solid fa-circle-info"></i>More Info</div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>

        <MovieList count={count} />
      </div>
    </>
  )
}

export default Home