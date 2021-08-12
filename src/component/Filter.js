import React, { useState } from "react";
import { starList } from "./MovieList";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const Filter = ({ movieList }) => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(starList);
  const changeColor=(id)=>{
    setStar(star.map(el=>el.id<=id?{icon: el.icon, isColored:true, id: el.id}
      :{icon: el.icon, isColored:false, id: el.id}))
  }
  

  return (
    <div>
      <div className="filter">
        <input className="cercare"
          type="text"
          value={search}
          placeholder="cercare"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div>
          {star.map((el) => (
            <span className={el.isColored ?'golder':'star'} key={el.id} onClick={()=>changeColor(el.id)}>{el.icon}</span>
          ))}
        </div>
      </div>
      
      <div>
        <h1 className="ctn">Lista dei filmi</h1>
      </div>
      <div className="lcard">
        {movieList.filter(movie=>movie.title.toUpperCase().includes(search.toUpperCase().trim())).filter(movie=>movie.rate>=star.filter(el=>el.isColored===true).length).map((movie, index) => (
          <Link to={`/${movie.id}`}> <MovieCard movie={movie} key={index} /></Link>
        ))}
      </div>
      <div style={{textAlign:'center', marginBottom:'10mm'}}>
      <Link to={`/add`}><button className="btn">Nuovo film</button></Link>
            </div>
    </div>
  );
};

export default Filter;