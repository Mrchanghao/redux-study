import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {Button} from 'react-bootstrap';
import stacks from '../data/stacks.json';
import {connect} from 'react-redux';
import {setStack} from '../modules/set_stack';
import {loadStack} from '../modules/load_stacks';
import {deleteStack} from '../modules/load_stacks';
class StackList extends Component {


    componentDidMount() {
        if(this.props.stacks.length === 0) {
            this.props.loadStack(stacks);
        }
    }


    render() {
        // console.log(this.props);
        return (
            <div>

                {this.props.stacks.map((stack) => {
                    return (
                        <Link to='/stack' 
                        key={stack.id}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h4
                                onClick={() => this.props.setStack(stack)}
                                >{stack.title}</h4>
                                {/* <Button
                                onDoubleClick={() => this.props.deleteStack(stack.id)}
                                >DELETE</Button> */}
                            </div>
                        </Link>
                    )
                })}
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        stacks: state.stacks
    }
}


export default connect(mapStateToProps, {setStack, loadStack, deleteStack})(StackList);