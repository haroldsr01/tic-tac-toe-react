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
            {props.user.username !== props.room.players[1] ? <td><button disabled={props.room.players[1] || props.user.username === props.room.host ? true : false} className='btn-joinroom' onClick={()=>{props.joinRoom(props.room._id,props.user.username);toggleClick()}}>{props.room.players[1] !== null ? 'FULL' : props.user.username === props.room.host ? "INVITE" : 'JOIN'}</button></td>
            :
            <td><button disabled={props.user.username !== props.room.players[1] ? true : false } className='btn-leave' onClick={()=>{props.leaveRoom(props.room._id);toggleClick()}}>LEAVE</button></td>
            }                    
            <td><button disabled={props.room.players[1] === null ? true : props.user.username ===props.room.host || props.user.username === props.room.players[1] ? false : true} className='btn-play' onClick={()=>props.navigate(`/play/room/${props.room._id}`)}>PLAY</button></td>
            <td><button disabled={props.user.username !== props.room.host ? true : false } className='btn-close' onClick={()=>props.closeRoom(props.room._id,props.room.host)}>CLOSE</button></td>            
        </tr>
)
}