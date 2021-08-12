
import './App.css';
import Filter from './component/Filter';
import {moviesList} from './component/MovieList';
import React, { useState } from "react";
import AddMovie from './component/AddMovie';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Details from './component/Details';
function App() {
  const [movieList, setMovieList]= useState(moviesList);
  const addMovie=(title, posterUrl, description ,rate,id,trailer)=>{title===''||posterUrl===''||rate===''||id===''||trailer===''?alert('inserisci i dati persi'):
    setMovieList([...movieList, {title: title, posterUrl: posterUrl, description: description, rate: rate, id:id, trailer:trailer}]);
  }
  return (
    <div className="app">
      <Router>
      <Route exact path='/' render = {(props)=><Filter movieList={movieList} {...props}/>} /> 
      <Route path='/add' render={(props)=> <AddMovie addMovie={addMovie} {...props} />} />
      <Route path='/:id' render={(props)=><Details movieList={movieList} {...props} />}/>
      </Router>
    </div>
  );
}
export default App