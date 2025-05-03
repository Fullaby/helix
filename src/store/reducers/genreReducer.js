import { GENRE_DETAIL, GENRE_FETCH_SUCCESS, NEW_GENRE } from "../actions/actiontypes"

const initialState= {genres: [],detailGenre:[]}
function genreReducer(state=initialState,action){
    switch(action.type){
        case GENRE_FETCH_SUCCESS:
            return{...state,genres: action.payload}
        case NEW_GENRE:
            return{...state,genres: action.payload}
        case GENRE_DETAIL:
            return{...state, detailGenre: action.payload}
        default:
            return state
    }

}

export default genreReducer