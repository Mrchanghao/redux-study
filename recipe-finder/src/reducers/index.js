import {SET_RECIPES} from '../actions/index';
import {combineReducers} from 'redux';

function recipes(state = [], action) {
    switch(action.type) {
        case SET_RECIPES:
            return [...action.items, ...state];
            // 다시 검토
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    recipes
});



export default rootReducer;