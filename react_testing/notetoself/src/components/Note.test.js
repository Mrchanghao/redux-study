import React from 'react'
import { mount } from 'enzyme';
import Note from './Note';

const props = {note: {text: 'test note'}};

describe('Note component', () => {
    let note = mount(<Note {...props} />);

    it('render the note text', () => {
        // console.log(note.debug());
        expect(note.find('p').text()).toEqual(props.note.text);
    })

   
})
