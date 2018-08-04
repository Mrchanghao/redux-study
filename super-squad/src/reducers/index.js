import characters_json from '../data/characters';
import { ADD_CHARACTER } from '../actions';

function characters(state = characters_json, action) {
    switch(action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
                return characters;
            return state;
        default:
            return state;
    }
}

export default characters;