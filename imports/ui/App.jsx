import React, { useState, Fragment} from 'react';
import {Routes, Route} from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm.jsx';
import { UserReg } from './UserReg.jsx';
import { Header } from './Header.jsx';
import { Lobby } from './Lobby.jsx';
import { Play } from './Play.jsx';
import { Room } from './Room.jsx';
import { Layout } from './Layout.jsx';
import { MainLayout } from './MainLayout.jsx';
import { RequireAuth } from './RequireAuth.jsx';
import { RoomsCollection } from '../api/Rooms.js';

export const App = () => {  

  const user = useTracker(() => Meteor.user())
  const logout = () => Meteor.logout();
  // const rooms = useTracker(() => {return RoomsCollection.find(userFilter,{}).fetch()});
    
  
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<UserReg />} />
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route path='lobby' element={<Lobby />} />
            <Route path='play/room/:roomId' element={<Play />} />
          </Route>
        </Route>
      </Route>

      {/* protected routes */}
    </Routes>

    )
  }
  
  // <div className='main'>    
  //   {user ? (
  //     <Fragment>
  //       <Header />
  //       {/* <Play />                */}
  //       <div className='lobby-container'>
  //         <Lobby />
  //         <button onClick={logout} className="btn-logout">LOGOUT</button>
  //       </div>
  //     </Fragment>
  //   ) : (
  //     (
  //       <Fragment>           
  //           <Routes>
  //             <Route path="/" element={<LoginForm />}></Route>
  //             <Route path="/register" element={<UserReg />}></Route> 
  //             <Route path="/lobby" element={<Lobby />}></Route>
  //             <Route path="/play" element={<Play />}></Route>                                             
  //           </Routes>                  
  //     </Fragment> 
  //     )
  //   )}
  // </div>