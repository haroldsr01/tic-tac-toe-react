import React, {Fragment, useState} from 'react';
import { Cells } from './Cells.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { RoomsCollection } from '../../api/Rooms.js';
import { useTracker } from 'meteor/react-meteor-data';
import { Modal } from './Modal.jsx';

export const Play = () => {
    const params = useParams()      
    const user = useTracker(() => Meteor.user());
    const rooms = useTracker(()=> {return RoomsCollection.find({_id:params.roomId}).fetch()})
    const playerX = rooms[0].players[0]
    const playerO = rooms[0].players[1]
    let playerXisAlive = rooms[0].playerXisAlive
    let playerOisAlive = rooms[0].playerOisAlive
    let currentPlayer = rooms[0].currentPlayer
    const msgWinner = ['You Win', "Congratulations!!!","You've got some skills","Impossible, you beat me!"]     
    const msgClicks = ['Aha!', 'Gotcha', 'Nice', 'Excellent', 'I know it', 'Super Nice', 'Wonderful', 'Awesome']
    const msgTest = ['Working', 'It Clicks', "You click it"]
    const winCombination =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let arrInputX = rooms[0].arrInputX
    let arrInputO = rooms[0].arrInputO
    const [showMessage, setShowMessage] = React.useState("Just for Fun")
    const navigate = useNavigate()

    // FUNCTIONS

    const handleClick = (cellId, roomId, currentPlayer, playerX, playerO) => {    
    if (playerXisAlive === false && arrInputX.length === 0 && rooms[0].msgWinner){
        showmsg(["Please click 'Start'"])
    } else if (playerXisAlive === false && arrInputX.length > 0 && rooms[0].msgWinner){
        showmsg(["Please click 'Reset'"])
    } else {
    if (currentPlayer === playerX && playerX === user.username && playerXisAlive === true && !arrInputX.includes(cellId) && !arrInputO.includes(cellId)){
        if (!arrInputX.includes(cellId)){              
        showmsg(msgClicks)
        Meteor.call('rooms.handleClick', cellId, roomId, currentPlayer, playerX, playerO)
        // RoomsCollection.update({
        //     _id:params.roomId            
        // },
        // {
        //     $set: {           
        //     [`moves.${cellId}.value`]:'X', 
        //     currentPlayer: playerO           
        //     },
        //     $push: {
        //         arrInputX:cellId
        //     }
        // }
        // )
        let temparrInputX = [...arrInputX,cellId]        
        chkCombi(winCombination, temparrInputX, roomId, currentPlayer)    
        chkDraw()  
        }
        } else if (currentPlayer === playerO && playerO === user.username && playerOisAlive === true && !arrInputX.includes(cellId) && !arrInputO.includes(cellId)){
        if (!arrInputO.includes(cellId)){
            showmsg(msgClicks)
            Meteor.call('rooms.handleClick', cellId, roomId, currentPlayer, playerX, playerO)
            // RoomsCollection.update({
            //     _id:params.roomId
            // },
            // {
            //     $set: {
            //         [`moves.${cellId}.value`]:'O',
            //         currentPlayer: playerX
            //     },
            //     $push: {
            //         arrInputO:cellId
            //     }
            // })
            let temparrInputO = [...arrInputO,cellId]
            chkCombi(winCombination, temparrInputO, roomId, currentPlayer)        
            chkDraw()            
        }
    }}
    }    

    const startGame = (roomId) => {
    if (arrInputX.length === 0 && user.username === rooms[0].players[0]){ 
        Meteor.call('rooms.start', roomId)
        // RoomsCollection.update(
        //     {_id:params.roomId},
        //     {$set:{playerXisAlive: true}}
        // )        
        showmsg(['Play for FUN'])  
    } else if (arrInputO.length === 0 && user.username === rooms[0].players[1]){
        Meteor.call('rooms.start', roomId)
        // RoomsCollection.update(
        //     {_id:params.roomId},
        //     {$set:{playerOisAlive: true}}
        // )        
        showmsg(['The FUN Begins'])  
    } else {
        showmsg(["Please click 'Reset' instead"])}
    }

    const resetGame = (roomId, playerX) => {
    setShowMessage("Just for Fun")
    Meteor.call('rooms.reset',roomId, playerX)
    // RoomsCollection.update(
    //     {_id:params.roomId},
    //     {
    //         $set:
    //             {moves:[
    //                 {id:0, value:""},
    //                 {id:1, value:""},
    //                 {id:2, value:""},
    //                 {id:3, value:""},
    //                 {id:4, value:""},
    //                 {id:5, value:""},
    //                 {id:6, value:""},
    //                 {id:7, value:""},
    //                 {id:8, value:""}
    //             ],
    //             arrInputX: [],
    //             arrInputO: [],
    //             currentPlayer: playerX,
    //             playerXisAlive: true,
    //             playerOisAlive: true,           
    //             msgWinner: null, 
    //         },
    //     }
        
    // )
    }

    const randomNum = (array) => {
        return Math.floor(Math.random()*array.length)
    }

    const chkCombi = (arrWin,playerInput, roomId, currentPlayer) =>{
    for (let i=0; i<arrWin.length; i++){
        if (arrWin[i].every(el => playerInput.includes(el))){      
            console.log(playerInput)
            Meteor.call('rooms.chkCombi', roomId, currentPlayer)
            // RoomsCollection.update(
            //     {_id:params.roomId},
            //     {
            //         $set:{                        
            //             playerXisAlive: false,
            //             playerOisAlive: false,    
            //             msgWinner: `${currentPlayer} wins`        
            //         },
            //     }
                
            // )
        } else (console.log("arrInputX: "+arrInputX))
    }
    }    

    const chkDraw = () => {
    if (arrInputX.length + arrInputO.length === 9){
        showmsg(["DRAW"])
        chkCombi(winCombination,arrInputX)  
        chkCombi(winCombination,arrInputO)   
    }
    }

    const showmsg = (arrMsg) => {
    let message = arrMsg[randomNum(arrMsg)]
    setShowMessage(message)
    }

    const cellElements = rooms[0].moves.map(cell => (
        <Cells 
            key={cell.id}
            handleClick={()=>handleClick(cell.id, params.roomId, currentPlayer, playerX, playerO)}          
            value={cell.value}
            id={cell.id}
        />
    ))

    // const AI = () => {
    // if (arrInputX.length > 0) {
    //     console.log('im an ai')
    // }
    // }

    const logout = () => {
        navigate('/login')
        Meteor.logout() }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Fragment>
            <div className="cellbox">
                {cellElements}
            </div>
            <p className='message'>{playerXisAlive ? showMessage : rooms[0].msgWinner}</p>
            <div className="playersbutton">
                <div className='button-area'>                    
                    <button onClick={()=>{startGame(params.roomId)}} id="startbutton">START</button>
                    <button onClick={()=>{resetGame(params.roomId, playerX)}} id="resetbutton">RESET</button>
                    {/* <button onClick={logout} id="logoutbutton">LOGOUT</button> */}
                    <button onClick={()=> setShow(true)} >LOGOUT</button>
                    <Modal isOpened={show} onClose={()=> setShow(false)}>Are you sure you want to logout?
                        <div className="btn-modal">
                            <button className='btn-logout' onClick={logout}>Yes</button>
                            <button className='btn-logout' onClick={()=> setShow(false)}>No</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </Fragment>
    )
}