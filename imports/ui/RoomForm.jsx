import React, { useState } from 'react';
import { RoomsCollection } from '../api/Rooms';

export const RoomForm = ({user}) => {
    const [room, setRoom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!room) return;
        RoomsCollection.insert({
            room: room.trim(),
            createdAt: new Date(),
            userId: user._id,
            host: user.username,
            players: [user.username,user.username]
        })

        setRoom("");
    }

    return (
        <form className='room-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add new room'
                value={room}
                onChange={(e)=>setRoom(e.target.value)}
            />
            <button className='btn-createroom' type="submit">CREATE</button>
        </form>
    )
}