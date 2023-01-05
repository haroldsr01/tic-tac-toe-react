import React from 'react';
import { RoomsCollection } from '../../api/Rooms.js';
import { GamesCollection } from '../../api/Games.jsx';
import { Room } from './Room.jsx';
import { RoomForm } from './RoomForm.jsx';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';

export const Lobby = () => {
    Meteor.subscribe('rooms.public')
    const user = useTracker(() => Meteor.user());
    // const userFilter = user ? { userId: user._id } : {};
    const rooms = useTracker(() => {
        if (!user) {
            return [];
        }
        // return RoomsCollection.find(userFilter,{}).fetch()});
        return RoomsCollection.find({}).fetch()});

    // const newGame = useTracker(() => {
    //     return GamesCollection.findOne()
    // })    

    const closeRoom = (_id) => {
        Meteor.call('rooms.close',_id);
    }

    const joinRoom = (_id) => {
        Meteor.call('rooms.join',_id)
        // RoomsCollection.update(_id,{
        // $set: {
        //     "players.1": username
        // }
        // });    
}

    const leaveRoom = (_id) => {
        Meteor.call('rooms.leave',_id)
        // RoomsCollection.update(_id,{
        // $set: {
        //     "players.1": null
        // }
        // });    
}
    const navigate = useNavigate()

    const testLog = (id, user) => console.log("my id is "+id+" "+user)    
    
    // const logout = () => navigate('/login')
    const logout = () => {
        navigate('/login')
        Meteor.logout() }

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