import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="crd">
      <div>
       <img className="img" src={movie.posterUrl} alt=""/>
       </div>
        <h2>{movie.title}</h2>
        <h5>{movie.type}</h5>
        <p className='gold'>{''.padStart(movie.rate, '☆')}</p>

    </div>
  );
};
export default MovieCard;