import React, { Component } from 'react';
import StackList from './StackList';
import {Link} from 'react-router-dom';

class App extends Component {
    
    render() {
        return (
            <div>
                <h2>App</h2>
                <hr />
                <StackList />
                <hr />
                <Link to="/form"><h2>Create new Stack</h2></Link>
            </div> 
        );
    }
}

export default App;