import React from 'react'
import { Link } from 'react-router-dom'
const Details = (props) => {
    return (
        <div className="details">
      {props.movieList
        .filter((movie) => String(movie.id) === props.match.params.id)
        .map((movie) => (
          <div key={movie.id} >
            <h1> Official Trailer</h1>
            <h2>{movie.title}</h2>
            <h4>{movie.description}</h4>
            <div>
            <iframe width='700' height='400' title="film"  src={movie.trailer} ></iframe>
            </div>
            <div>
              
            </div>
            <Link to={`/`}>
              <button className="btn">Ritorno</button>
            </Link>
          </div>
        ))}
    </div>
    )
}

export default Details
