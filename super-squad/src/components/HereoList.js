import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeCharacterById} from '../actions';

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your heroList</h4>
                <ul className='list-group'>
                    {this.props.heroes.map(h => {
                        return (
                            <li key={h.id} className='list-group-item'>
                                <span>{h.name}</span>
                                <span>
                                    <button
                                    onClick={() => this.props.removeCharacterById(h.id)}
                                    className='right-button btn-sm'>-</button>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, {removeCharacterById})(HeroList);

