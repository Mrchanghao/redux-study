import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroList from './HereoList';
import SquadStats from './SquadStats';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='App'>
                <div className='col-lg-4'>
                    <CharacterList />
                </div>
                <div className='col-lg-4'>
                    <HeroList />
                </div>
                <div className='col-lg-4'>
                    <SquadStats />
                </div>
                
            </div>
        );
    }
}

export default App;