import { GET_ARITSTS_ALL, SEARCH_ARTIST, GET_ARTIST_DETAIL, CLEAR_ARTIST_DETAIL } from "../actions";

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ARITSTS_ALL:
            return {...state, artistsList: action.payload}
        case SEARCH_ARTIST:
            return {...state, artistsList: action.payload}
        case GET_ARTIST_DETAIL:
            return {
                ...state,
                artistData: action.payload
            };
        
        case CLEAR_ARTIST_DETAIL:
            return {...state, artistData: action.payload }
        default: 
            return state;
    }
}