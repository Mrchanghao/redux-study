import React from 'react'
import {mount} from 'enzyme';
import App from './App';


describe('App component test', () => {
    let app = mount(<App />)
    // console.log(app);
    it('render the App title', () => {
        // console.log(app.debug())
        expect(app.find('h1').text()).toEqual('Note to Self')
    })
    it('render the clear button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Clear Note')
    })

    describe('when rendering the form', () => {
        it('create the form  Component', () => {
            expect(app.find('Form').exists()).toBe(true);
        })
        it('rendering the form control', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        })

        it('render the submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit')
        })
    })
    describe('create the note', () => {
        let testNote = 'test note';
        let event = {target: {value: testNote}};
        beforeEach(() => {
            app.find('FormControl').simulate('change', event);
        })

        it('udpate the state', () => {
            // console.log(app.state())
            expect(app.state().text).toEqual(testNote);
        })
        

        describe('submit the new note', () => {
            beforeEach(() => {
                app.find('.btn').at(0).simulate('click');
            });

            afterEach(() => {
                app.find('.btn').at(1).simulate('click');
            });


            it('add new to the state ', () => {
                expect(app.state().notes[0].text).toEqual(testNote);
            })
            describe('remount the componet', () => {
                let app2;
                beforeEach(() => {
                    app2 = mount(<App />);
                });
    
                it('reads the stores in the cookies', () => {
                    // console.log(app2.state());
                    expect(app2.state().notes).toEqual([{"text": testNote}]);
                })
            })
        })

        describe('click the clear button', () => {
            beforeEach(() => {
                app.find('.btn').at(1).simulate('click');
            });
            it('clear all the state.notes', () => {
                expect(app.state().notes.length).toEqual(0);
            })
        })    
    })
    
})
