import React from 'react';
import { addFavourite, removeFavourite } from '../actions/actions';

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    this.props.store.dispatch(addFavourite(this.props.movie));
  };

  handleUnFavouriteClick = () => {
    this.props.store.dispatch(removeFavourite(this.props.movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>

          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourites
              </button>
            )}
            {/* <button className="favourite" onClick={this.handleFavouriteClick}>
                                Favourites
                            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
