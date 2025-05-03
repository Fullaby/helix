// import { legacy_createStore as createStore } from "redux";
import { DELETE_MOVIE, EDIT_MOVIE, MOVIE_DETAIL_ID, MOVIE_FETCH_SUCCESS, NEW_MOVIE} from "../actions/actiontypes";

const initialState= {movies: [],detailMovie: []}
function movieReducer(state= initialState,action){
    switch(action.type){
        case MOVIE_FETCH_SUCCESS:
            return{ ...state,movies: action.payload};
        case MOVIE_DETAIL_ID:
            return{ ...state,detailMovie: action.payload};
        case EDIT_MOVIE:
            return{ ...state,detailMovie: action.payload};
        case NEW_MOVIE:
            return{ ...state,movies: action.payload};
        case DELETE_MOVIE:
            return{ ...state,movies: action.payload};
        default: 
          return state
    }
}

export default movieReducer