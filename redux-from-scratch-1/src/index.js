import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/app';
import store from './store';
// import { Provider } from 'react-redux';


function fancyLog() {
    console.log('%c Rendered with 👉 👉👇', '‘background: purple; color: #FFF’')
    console.log(store.getState())
}

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)



// ReactDOM.render(
//     <App  />
// , document.getElementById('root'))




