import {combineReducers} from 'redux';
import { stackReducer } from './set_stack';
import { stacksReducer } from './load_stacks';
// import {addStackReducer} from './add_stack';
export default combineReducers({
    stack: stackReducer,
    stacks: stacksReducer
})