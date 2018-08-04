import React, {Component} from 'react';
import './Main.css';
import Empty from '../Empty/Empty';
import ChatWindow from '../ChatWindow/ChatWindow';

class Main extends Component {
    renderContent() {
        const {user, activeUserId} = this.props;
        if(!activeUserId) {
            return ( <Empty user={user} activeUserId={activeUserId} />)
        } else {
            return ( <ChatWindow activeUserId={activeUserId} />)
        }
    }
    render() {
        const {user, activeUserId} = this.props;
        return (
            <main className='Main'>
                {this.renderContent()}
            </main>
        );
    }
}




// const Main = ({user, activeUserId}) => {
//     console.log(user)
//     const renderContent = () => {
        
//     }
//     return (
       
//     )
// }

export default Main