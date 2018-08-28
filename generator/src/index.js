import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { fetchMemes } from './actions';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(fetchMemes())

store.subscribe(() => {
	console.log(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'))