import React from 'react'
import {connect} from 'react-redux';

class SquadStats extends React.Component {
    stats() {
        let stats = {
            strength: 0,
            speed: 0,
            intel: 0
        }
        this.props.heroes.forEach(h => {
            stats.strength += h.strength;
            stats.speed += h.speed;
            stats.intel += h.intelligence;
        });
        return stats;
    }
    
    render() {
        return (
            <div>
                <h4>Stats</h4>
                <ul>
                    <li className='list-group-item'>
                        <b>OverAll-strength:</b> {this.stats().strength}
                    </li>
                    <li className='list-group-item'>
                        <b>OverAll-speed:</b> {this.stats().speed}
                    </li>
                    <li className='list-group-item'>
                        <b>OverAll-intel:</b> {this.stats().intel}
                    </li>
                </ul>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    }
} 

export default connect(mapStateToProps)(SquadStats)