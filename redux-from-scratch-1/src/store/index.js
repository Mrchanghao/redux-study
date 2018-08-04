import reducer from '../reducers/index'
// import {contacts, user} from '../static-data';
import {createStore} from 'redux';

const store = createStore(reducer);

export default store;