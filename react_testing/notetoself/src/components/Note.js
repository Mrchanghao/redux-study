import React, { Component } from 'react';

class Note extends Component {
    
    render() {
        return (
            <li className='note'>
                <p>{this.props.note.text}</p>
            </li>        
        );
    }
}

export default Note;