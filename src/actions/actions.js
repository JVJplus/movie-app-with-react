// see: https://redux.js.org/recipes/reducing-boilerplate

export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FAV_TAB = 'FAV_TAB';

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FAV,
    movie,
  };
}

export function toggleTab(showFavTab) {
  return {
    type: FAV_TAB,
    showFavTab
  };
}
