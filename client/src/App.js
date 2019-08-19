import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";
import {Route} from 'react-router-dom';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path="/" component={MovieList}/>
        <Route exact path="/movies/movieId" component={Movie} />
      </div>
    </div>
  );
};

export default App;
