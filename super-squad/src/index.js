import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
// import {addCharacterById} from './actions';

const store = createStore(rootReducer);
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(addCharacterById(3))

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))