// see: https://redux.js.org/recipes/reducing-boilerplate

export const ADD_MOVIE='ADD_MOVIE'
export const ADD_FAV='ADD_FAV'

export function addMovie(id,movie){
  return {
    type:ADD_MOVIE,
    data:{
      id,
      movie
    }
  };
}

export function addFavourite(id,movie){
  return {
    type:ADD_FAV,
    data:{
      id,
      movie
    }
  };
}
