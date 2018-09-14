import React, { Component } from 'react';
import {connect} from 'react-redux';
import {artistListAll, searchArtist} from '../actions/index'
import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 


    componentDidMount() {
        this.props.artistListAll();
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.searchArtist(key)
        // console.log(key)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistsList}/>
            </div>
        )
    }   
}

function mapStateToProps (state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, {artistListAll, searchArtist})(HomeContainer);