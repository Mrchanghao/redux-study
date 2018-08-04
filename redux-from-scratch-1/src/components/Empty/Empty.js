import React from 'react';
import './Empty.css';

const Empty = ({user}) => {
    const {email, name, profile_pic, status} = user;
    const firstName = name.split(' ')[0];
    return (
        <div className='Empty'>
            <h1 className='Empty__name'>Welcome {firstName}</h1>
            <img src={profile_pic} alt={name} className='Empty__img' />
            <p className='Empty__status'>
                <b>Status:</b> {status}
            </p>
            <button className='Empty__btn'>Start Chatting</button>
            <p className='Empty__info'>
                채팅 가능한 사람 추가적으로 검색
            </p>
        </div>
    )
};

export default Empty;