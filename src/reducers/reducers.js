import * as actions from '../actions/actions';
/* 
  store={
    movies:[
      {
        key:id,
        name:movie_name
      },
      {},
      {}
    ],
    favourites:[
      {},
      {},
      {}
    ]
  }
 */

export function reducer(state, action) {
  if (typeof state == 'undefined') {
    // state=initialState can be also passed
    return {
      showFavTab:false,
      movies: [],
      favourites: [],
    };
  }

  switch (action.type) {
    case actions.ADD_MOVIE:
      return {
        ...state,
        // movies:state.movies.concat([{id:action.data.id,movie:action.data.movie}])
        movies: state.movies.concat(action.movie),
      };
    case actions.ADD_FAV:
      return {
        ...state,
        // movies:state.movies.concat([{id:action.data.id,movie:action.data.movie}])
        favourites: state.favourites.concat(action.movie),
      };
    case actions.REMOVE_FAV:
      return {
        ...state,
        favourites: state.favourites.filter(f=>f!==action.movie)
      }
    case actions.FAV_TAB:
      return {
        ...state,
        showFavTab:action.showFavTab,
      }
    default:
      return state;
  }
}
