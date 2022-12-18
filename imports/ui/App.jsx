import React, { useState, Fragment} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm.jsx';
import { UserReg } from './UserReg.jsx';
import { Header } from './Header.jsx';
import { Lobby } from './Lobby.jsx';
import { Play } from './Play.jsx';
import { Room } from './Room.jsx';

export const App = () => {  

  const user = useTracker(() => Meteor.user())
  const logout = () => Meteor.logout();

  return (
    <div className='main'>    
      {user ? (
        <Fragment>
          <Header />
          {/* <Play />                */}
          <div className='lobby-container'>
            <Lobby />
            <button onClick={logout} className="btn-logout">LOGOUT</button>
          </div>
        </Fragment>
      ) : (
        (
          <Fragment>
            <Router>                              
              <Routes>
                <Route path="/" element={<LoginForm />}></Route>
                <Route path="/register" element={<UserReg />}></Route> 
                <Route path="/lobby" element={<Lobby />}></Route>
                <Route path="/play/room" element={<Play />}></Route>                                             
              </Routes>      
            </Router>
        </Fragment> 
        )
      )}
    </div>
  )
}
