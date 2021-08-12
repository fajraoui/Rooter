import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [id, setId] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeRate = (e) => {
    setRate(e.target.value);
  };
  const changeUrl = (e) => {
    setPosterUrl(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeTrailer = (e) => {
    setTrailer(e.target.value);
  };
  const changeId = (e) => {
    setId(e.target.value);
  };
  return (
    <div>
      <div className="content">
        <h1 style={{ textAlign: "center" }}>Nuovo film</h1>
        <div className="list">
          <div className="sous-list">
            <span style={{ fontWeight: "bold" }}>Titolo:</span>
            <input
              className="input"
              type="text"
              value={title}
              placeholder="entrare il titolo del tuo nuovo film"
              onChange={changeTitle}
            />
          </div>
          <div className="sous-list">
            <span style={{ fontWeight: "bold" }}>Rate:</span>
            <input
              type="Number"
              className="input"
              value={rate}
              placeholder="entrare il rate del tuo nuovo film"
              onChange={changeRate}
            />
             </div> 
            <div className="sous-list">
            <span style={{ fontWeight: "bold" }}>id:</span>
            <input
              type="number"
              className="input"
              value={id}
              placeholder="entrare id del tuo film"
              onChange={changeId}
            />
          </div>
          <div className="sous-list">
            <label style={{ fontWeight: "bold" }}>posterURL:</label>
            <textarea
              cols="1"
              rows="3"
              className="input"
              value={posterUrl}
              placeholder="entrare il URL del tuo nuovo film"
              onChange={changeUrl}
            />
            </div>
            <div className="sous-list">
            <label style={{ fontWeight: "bold" }}>Trailer:</label>
            <textarea
              cols="1"
              rows="3"
              className="input"
              value={trailer}
              placeholder="entrare il trailer del tuo film"
              onChange={changeTrailer}
            />
          </div>
          <div className="sous-list">
            <label style={{ fontWeight: "bold" }}>Descrizione:</label>
            <textarea
              cols="1"
              rows="6"
              className="input"
              value={description}
              placeholder="descrizione del tuo nuovo film"
              onChange={changeDescription}
            />
          </div>
        </div>
        <div>
        <Link to={`/`}><button 
            onClick={()=>addMovie(title, posterUrl, description, rate,id,trailer)}
            style={{
              color: "white",
              backgroundColor: "rgb(126, 91, 75)",
              borderRadius: "5px",
            }}
          >
            Aggiungi film
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;