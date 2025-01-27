import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
// import MovieCard from "./Movies/MovieCard";
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
        <Route exact path="/" 
        component={MovieList}/>

        <Route path="/movies/:id" 
        component={Movie}/>

        {/* <Route path="/movies/:id" 
        render={props => <MovieList {...props} movies={Movie}/>} 
        
        ONLY need to use (render function) this when you are passing state to another component. If we were passing saved list then we would need it*/}

        
      </div>
    </div>
  );
};

export default App;
