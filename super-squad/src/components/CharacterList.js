import React from 'react'
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions/index'


class CharacterList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps === this.props)
        return nextProps.characters !== this.props.characters;
    }
    render() {
        const {characters, addCharacterById} = this.props;
        // console.log(this.props);
        return (
            <div>
                <h4>CharacterList</h4>
                <ul className='list-group'>
                    {characters.map((c) => {
                        return <li className='list-group-item' key={c.id}>
                            <span className='list-item'>
                                {c.name}
                            </span>
                            <span className='list-item '>
                                <button className=' right-button btn-sm'  onClick={() => addCharacterById(c.id)}>+</button>
                            </span>
                            </li>
                    } )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        characters: state.characters
    }
}

// mapDispatchToProps ==> dispatch를 인자로 가진다
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addCharacterById}, dispatch)
// }
export default connect(mapStateToProps, {addCharacterById})(CharacterList)

// export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);