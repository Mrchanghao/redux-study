// import characters_json from '../data/characters';
import {combineReducers} from 'redux';
// import { ADD_CHARACTER } from '../actions';
import heroesReducer from './heroes';
import charactersReducer from './characters';





const rootReducer = combineReducers({
    heroes: heroesReducer,
    characters: charactersReducer 
})

export default rootReducer;