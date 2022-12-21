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
            players: [user.username, null],
            playerXisAlive: false,
            playerOisAlive: false,
            currentPlayer: user.username,
            moves: [
                {id:0, value:"X"},
                {id:1, value:"O"},
                {id:2, value:"X"},
                {id:3, value:"O"},
                {id:4, value:"X"},
                {id:5, value:"O"},
                {id:6, value:"X"},
                {id:7, value:"O"},
                {id:8, value:"X"}
                ],        
            arrInputX:[],
            arrInputO:[],
            msgWinner: null,
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