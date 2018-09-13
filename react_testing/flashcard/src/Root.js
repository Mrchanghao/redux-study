import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import reducer from './modules';
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';

const store = createStore(reducer, applyMiddleware(logger));

console.log(store.getState())

class Root extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/stack' component={Stack} />
                    <Route path='/form' component={StackForm} />
                </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

export default Root;


