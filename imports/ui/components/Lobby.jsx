import React, { useState } from 'react';
import { RoomsCollection } from '../../api/Rooms.js';
import { GamesCollection } from '../../api/Games.jsx';
import { Room } from './Room.jsx';
import { RoomForm } from './RoomForm.jsx';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal.jsx';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(show)
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
            {/* <button className='btn-logout' onClick={logout}>LOGOUT</button>      */}
            <button onClick={()=> setShow(true)} >LOGOUT</button>
            <Modal isOpened={show} onClose={()=> setShow(false)}>Are you sure you want to logout?
                <div className="btn-modal">
                    <button className='btn-logout' onClick={logout}>Yes</button>
                    <button className='btn-logout' onClick={()=> setShow(false)}>No</button>
                </div>
            </Modal>
            {/* <Button variant='primary' onClick={handleShow}>Launch demo modal</Button>
            <Modal 
                show={show} 
                onHide={handleClose}
                // backdrop='static'
                // keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is my modal body.</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary' onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}