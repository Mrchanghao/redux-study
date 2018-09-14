import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(logger, promise))

console.log(store.getState())

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

