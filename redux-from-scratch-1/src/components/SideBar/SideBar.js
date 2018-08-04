import React from 'react';
import './SideBar.css';
import User from '../../containers/User/User'


const SideBar = ({contacts}) => {
    return (
        <aside className='Sidebar'>
            {contacts.map(contact => (
                // console.log(contact)
                <User user={contact} key={contact.user_id} />
            ))}
        </aside>
    )
}

export default SideBar;