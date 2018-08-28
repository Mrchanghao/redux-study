import {combineReducers} from 'redux';
import { RECEIVE_MEMES } from '../actions';
import {NEW_MEME} from '../actions';

const memes = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default: 
            return state;
    }
};

const myMemes = (state = [], action) => {
    switch(action.type) {
        case NEW_MEME:
            let newState = [...state, action.meme];
            return newState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    memes,
    myMemes
});

export default rootReducer;
