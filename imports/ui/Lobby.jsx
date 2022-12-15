import React from 'react';
import { RoomsCollection } from '../api/Rooms.js';
import { Room } from './Room.jsx';
import { RoomForm } from './RoomForm.jsx';
import { useTracker } from 'meteor/react-meteor-data';

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
    
    return (
        <div className='lobby'>
            <RoomForm user={user}/>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>ROOM ID</th>
                        <th scope='col'>HOST</th>
                        <th scope='col'>PLAYERS</th>
                        <th scope='col'>JOIN</th>
                        <th scope='col'>PLAY</th>
                    </tr>
                </thead>
                <tbody>
                    { rooms.map(room => <Room key={room._id} room={room}/>)}
                </tbody>
            </table>                        
        </div>
    )
}