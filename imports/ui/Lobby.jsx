import React from 'react';
import { RoomsCollection } from '../api/Rooms.js';
import { Room } from './Room.jsx';
import { RoomForm } from './RoomForm.jsx';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';

export const Lobby = () => {
    // ROOM COLLECTION
    const user = useTracker(() => Meteor.user());
    // const userFilter = user ? { userId: user._id } : {};
    const rooms = useTracker(() => {
        if (!user) {
            return [];
        }
        // return RoomsCollection.find(userFilter,{}).fetch()});
        return RoomsCollection.find({}).fetch()});
    
    const closeRoom = (_id) => {
        RoomsCollection.remove(_id);
    }

    const joinRoom = (_id, username) => {RoomsCollection.update(_id,{
        $set: {
            "players.1": username
        }
    });    
}

    const leaveRoom = (_id, username) => {RoomsCollection.update(_id,{
        $set: {
            "players.1": null
        }
    });    
}
    const navigate = useNavigate()

    const testLog = (id, user) => console.log("my id is "+id+" "+user)    
    
    const logout = () => navigate('/login')
    
    return (
        <div className='lobby'>
            <RoomForm user={user}/>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>ROOM ID</th>
                            <th scope='col'>HOST</th>
                            <th scope='col'>PLAYERS</th>
                            <th scope='col'>JOIN</th>
                            <th scope='col'>PLAY</th>
                            <th scope='col'>CLOSE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rooms.map(room => <Room key={room._id} user={user} room={room} closeRoom={closeRoom} joinRoom={joinRoom} leaveRoom={leaveRoom} testLog={testLog} navigate={navigate}/>)}
                    </tbody>
                </table>                 
            </div>
            <button className='btn-logout' onClick={logout}>LOGOUT</button>       
        </div>
    )
}