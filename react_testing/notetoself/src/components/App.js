import React, { Component } from 'react';
import {Form , FormControl, Button} from 'react-bootstrap';
import Note from './Note';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }
    componentDidMount() {
        
        this.setState({
            notes: read_cookie(cookie_key)
        });
    }

    handleSubmit() {
        const {text, notes} = this.state;
        const newNote = {text: text};
        const mergedNotes = [...notes, newNote];
        this.setState({
            notes: mergedNotes, 
        })
        bake_cookie(cookie_key, mergedNotes);
    }

    handleClear() {
        delete_cookie(cookie_key);
        this.setState({
            notes: [],
            text: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Note to Self</h1>
                <Form inline>
                    <FormControl onChange={e => this.setState({text: e.target.value})} />
                    {' '}
                    <Button onClick={() => this.handleSubmit()}>Submit</Button>
                </Form>
                <ul>
                {this.state.notes.map((note, i) => {
                    return (
                        <Note key={i} note={note} />
                    )
                })}
                </ul>
                <Button onClick={this.handleClear.bind(this)}>Clear Note</Button>
            </div>
        );
    }
}

export default App;