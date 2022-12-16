import React from 'react';

export const Room = (props) => {
    const [isClick, setIsClick] = React.useState(true)
    const toggleClick = (room) => {
        setIsClick(isClick => !isClick)
        console.log(room+" isClick: "+isClick)
    }

    return (
        <tr>
            <th scope='row'>{props.room.room}</th>
            <td>{props.room.host}</td>
            <td>
                {props.room.players[0]}<br/>
                {props.room.players[1]}
            </td>
            {isClick ? <td><button className='btn-joinroom' onClick={()=>{props.joinRoom(props.room._id,props.user.username);toggleClick()}}>JOIN</button></td>:
            <td><button className='btn-leave' onClick={()=>{props.leaveRoom(props.room._id);toggleClick()}}>LEAVE</button></td>
            }                    
            <td><button className='btn-play'>PLAY</button></td>
            <td><button className='btn-close' onClick={()=>props.closeRoom(props.room._id,props.room.host)}>CLOSE</button></td>            
        </tr>
)
}
// <li className='li-rooms'>
//     <button className='btn-joinroom'>JOIN</button>
//     <button className='btn-play'>PLAY</button>
//     {room.room}{room.host}{room.players}
// </li>