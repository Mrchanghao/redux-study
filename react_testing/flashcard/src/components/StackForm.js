import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addStack} from '../modules/load_stacks';


class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: []
        }
    }

    addCard() {
        const {cards} = this.state;
        this.setState({
            cards: [...cards, {id: cards.length, prompt: '', answer: ''}]
        })
    }


    updateCardPart(event, index, part) {
        const {cards} = this.state;
        cards[index][part] = event.target.value;
        this.setState({cards});
    }

    addStack () {
        console.log(this.state)
        this.props.addStack(this.state);
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <Link to='/' className='link-home'>
                    <h4>HOME</h4>
                </Link>
                <h4>Create new Stack</h4>
                <Form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl onChange={e => this.setState({title: e.target.value})} />
                    </FormGroup>
                    {this.state.cards.map((card, index) => {
                        return (
                            <div key={card.id}>
                                <FormGroup>
                                    <ControlLabel>Prompt: </ControlLabel>
                                    <br />
                                    <FormControl 
                                    onChange={event => this.updateCardPart(event, index, 'prompt')} />

                                    <ControlLabel>Answer</ControlLabel>
                                    <FormControl 
                                    onChange={event => this.updateCardPart(event, index, 'answer')} />
                                </FormGroup>
                            </div>
                        )
                    })}
                </Form>
                <Button onClick={() => this.addCard()}>ADD CARD</Button>
                <Button onClick={() => this.addStack()}>ADD Stack and SAVE</Button>
            </div>
        );
    }
}

export default connect(null, {addStack})(StackForm);