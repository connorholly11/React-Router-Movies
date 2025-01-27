import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  console.log(props);

  const id = props.match.params.id;
  //I'm putting this here so it is in scope of useEffect and the dependency array
 
  useEffect(() => {

    
    // const movie = props.movies.find(movie => props.match.params.id === `${movie.id}`);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  //the id dependency array is telling the the useEffect to watch the id and then change if it updates
  


  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie);
  //   // document.querySelector('.saveButton').addEventListener('click', function() {
  //   //   console.log('HELLO');
  //   // })
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        {/* <Link to='/movies/3'>go to movie 6</Link> */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="saveButton" 
      // onClick={ () => saveMovie()}
      > Save </div>
    </div>
  );
}

export default Movie;
