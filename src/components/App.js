import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import { createStore } from 'redux';
import { reducer } from '../reducers/reducers';
import { addMovie, toggleTab } from '../actions/actions';

const store = createStore(reducer);

class App extends React.Component {
  componentDidMount() {
    store.subscribe(this.forceUpdate.bind(this));
    data.forEach((movie, index) => {
      store.dispatch(addMovie(movie));
      // console.log(store.getState());
    });
  }

  isFavourite(movie) {
    return store.getState().favourites.includes(movie);
  }

  render() {
    const listToDisplay =
      store.getState().showFavTab === true
        ? store.getState().favourites
        : store.getState().movies;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className="tab"
              onClick={() => store.dispatch(toggleTab(false))}
            >
              Movie
            </div>
            <div
              className="tab"
              onClick={() => store.dispatch(toggleTab(true))}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {listToDisplay.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`index-${index}`}
                store={store}
                isFavourite={this.isFavourite(movie)}
              />
            ))}
          </div>

          {listToDisplay.length === 0 ? (
            <div className="no-movies">No Movies to display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
