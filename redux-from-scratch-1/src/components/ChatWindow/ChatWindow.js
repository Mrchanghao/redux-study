import React from 'react';


const ChatWindow = ({activeUserId}) => {
    return (
        <div className='ChatWindow'>Chat for user id: {activeUserId}</div>
    )
}

export default ChatWindow;