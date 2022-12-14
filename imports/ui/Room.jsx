import React from 'react';

export const Room = ({room}) => {
    
    return (
        <li className='li-rooms'>
            <button className='btn-joinroom'>JOIN</button>
            <button className='btn-play'>PLAY</button>
            {room.room}
        </li>
    )
}