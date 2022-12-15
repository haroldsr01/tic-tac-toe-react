import React from 'react';

export const Room = ({room}) => {
    
    return (
        <tr>
            <th scope='row'>{room.room}</th>
            <td>{room.host}</td>
            <td>
                {room.players[0]}<br/>
                {room.players[1]}<br/>              
            </td>
            <td><button className='btn-joinroom'>JOIN</button></td>
            <td><button className='btn-play'>PLAY</button></td>
        </tr>
)
}
// <li className='li-rooms'>
//     <button className='btn-joinroom'>JOIN</button>
//     <button className='btn-play'>PLAY</button>
//     {room.room}{room.host}{room.players}
// </li>