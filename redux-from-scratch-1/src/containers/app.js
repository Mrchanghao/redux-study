import React, { Component } from 'react';
import '../styles/app.css'
import SideBar from '../components/SideBar/SideBar';
import Main  from '../components/Main/Main';
import store from '../store'
import _ from 'lodash';

const App = () => {
  const {contacts, user, activeUserId} = store.getState();
  return (
    <div className='App'>
      <SideBar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  )
}

export default App;
