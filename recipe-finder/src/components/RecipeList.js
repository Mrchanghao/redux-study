import React, { Component } from 'react';
import {connect} from 'react-redux';

class RecipeList extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div></div>        
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        state
    }
}

export default RecipeList;
