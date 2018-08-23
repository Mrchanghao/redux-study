import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setRecipes } from '../actions';


class SearchRecipes extends Component {
    
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search = () => {
        const {ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        // console.log(this.state, url)
        fetch(url, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.props.setRecipes(json.result)
            console.log(json.result)
        })
        .catch(err => console.log(err))
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredient</ControlLabel>
                    { ' ' }
                    <FormControl
                    name='ingredients' 
                    onChange={this.changeHandler}
                    type='text' placeholder='실제 야채' />
                    { ' ' }
                </FormGroup>
                
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    { ' ' }
                    <FormControl 
                    name='dish'
                    onChange={this.changeHandler}
                    type='text' placeholder='Dish' />
                    { ' ' }
                </FormGroup>
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        );
    }
}

// function mapStateToProps (state) {
//     console.log(state)
//     return {
//         recipes: state.recipes
//     }
// }


export default connect(null, {setRecipes})(SearchRecipes);