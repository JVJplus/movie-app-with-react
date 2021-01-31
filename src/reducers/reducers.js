import * as actions from '../actions/actions'
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

export function reducer(state,action){
  if(typeof state=='undefined') {
    // state=initialState can be also passed
    return {
      movies:[],
      favourites:[]
    }
  }
  
  switch(action.type){
    case actions.ADD_MOVIE: 
      return {
        ...state,
        // movies:state.movies.concat([{id:action.data.id,movie:action.data.movie}])
        movies:state.movies.concat(action.data)
      };
    case actions.ADD_FAV: 
      return {
        ...state,
        // movies:state.movies.concat([{id:action.data.id,movie:action.data.movie}])
        favourites:state.favourites.concat(action.data)
      };
    default:
      return state;
  }
}