import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import {createStore} from 'redux'
import { reducer } from '../reducers/reducers';
import * as actions from '../actions/actions';

const store =createStore(reducer);

class App extends React.Component {
  componentDidMount() {
    store.subscribe(this.forceUpdate.bind(this));
    data.forEach((movie, index) => {
        store.dispatch(actions.addMovie(index, movie));
        console.log(store.getState());
      }
    );
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movie</div>
            <div className="tab">Favourites</div>
          </div>

          
          <div className="list">
            {store.getState().movies.map((movie, index) => (
              <MovieCard movie={movie.movie} key={`index-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
