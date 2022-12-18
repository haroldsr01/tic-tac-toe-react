import React, { useState, Fragment} from 'react';
import { Cells } from './Cells.jsx';
import { useNavigate } from 'react-router-dom';
import { GamesCollection } from '../api/Games.jsx';
import { useTracker } from 'meteor/react-meteor-data';

export const Play = () => {
    // const games = useTracker(() => {
    //     return GamesCollection.find({}).fetch()});
    //     // return RoomsCollection.find(userFilter,{}).fetch()});
    // const [game, setGame] = useState("");

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // if (!room) return;
    //     GamesCollection.insert({
    //         game: 'testgame',
    //         createdAt: new Date(),
    //         // userId: user._id,
    //         // host: user.username,
    //         // players: [user.username, null]
    //     })

    //     setGame("");
    // }    

// Set players & board initial state
    const playerX = "X" 
    const playerO = "O"
    let isAlive = React.useRef(false);
    let currentPlayer = React.useRef(playerX)
    const [cells, setCell] = React.useState([
    {id:0, value:""},
    {id:1, value:""},
    {id:2, value:""},
    {id:3, value:""},
    {id:4, value:""},
    {id:5, value:""},
    {id:6, value:""},
    {id:7, value:""},
    {id:8, value:""}
    ])

    const msgWinner = ['You Win', "Congratulations!!!","You've got some skills","Impossible, you beat me!"]     
    const msgClicks = ['Aha!', 'Gotcha', 'Nice', 'Excellent', 'I know it', 'Super Nice', 'Wonderful', 'Awesome']
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

    const arrInputX = React.useRef([])
    const arrInputO = React.useRef([])  
    const [showMessage, setShowMessage] = React.useState("Just for Fun")
    const navigate = useNavigate()

    // FUNCTIONS

    const handleClick = (id) => {    
    if (isAlive.current === false && arrInputX.current.length === 0){
        showmsg(["Please click 'Start'"])
    } else if (isAlive.current === false && arrInputX.current.length > 0){
        showmsg(["Please click 'Reset'"])
    } else {
    if (currentPlayer.current === playerX && isAlive.current === true && !arrInputX.current.includes(id) && !arrInputO.current.includes(id)){
        if (!arrInputX.current.includes(id)){      
        switchTurn()
        arrInputX.current.push(id)
        showmsg(msgClicks)
        setCell(prevCells => {
            return prevCells.map((cell) => {        
            return cell.id === id ?{...cell, value: "X"} : cell
            })
        })
        chkCombi(winCombination,arrInputX.current)    
        chkDraw()  
        }
        } else if (currentPlayer.current === playerO && isAlive.current === true && !arrInputX.current.includes(id) && !arrInputO.current.includes(id)){
        if (!arrInputO.current.includes(id)){
            switchTurn()
            arrInputO.current.push(id)
            showmsg(msgClicks)
            setCell(prevCells => {
            return prevCells.map((cell) => {        
                return cell.id === id ?{...cell, value: "O"} : cell
            })
            })
            chkCombi(winCombination,arrInputO.current)        
            chkDraw()  
        }
    }}
    }
    const switchTurn = () => {    
    currentPlayer.current === playerX ? currentPlayer.current = playerO : currentPlayer.current = playerX           
    }  

    const startGame = () => {
    if (arrInputX.current.length === 0){ 
        isAlive.current = true
        showmsg(['Play for FUN'])  
    } else {
        showmsg(["Please click 'Reset' instead"])}
    }

    const resetGame = () => {
    isAlive.current = true;
    currentPlayer.current = playerX;
    arrInputX.current = []
    arrInputO.current = []
    setShowMessage("Just for Fun")
    setCell(prevCells => {
        return prevCells.map((cell) => {
        return {...cell, value: ""}
        })
    })
    }

    const randomNum = (array) => {
        return Math.floor(Math.random()*array.length)
    }

    const chkCombi = (arrWin,playerInput) =>{
    for (let i=0; i<arrWin.length; i++){
        if (arrWin[i].every(el => playerInput.includes(el))){      
            isAlive.current = false;          
            showmsg(msgWinner)                      
        } 
    }
    }    

    const chkDraw = () => {
    if (arrInputX.current.length + arrInputO.current.length === 9){
        showmsg(["DRAW"])
        chkCombi(winCombination,arrInputX.current)  
        chkCombi(winCombination,arrInputO.current)   
    }
    }

    const showmsg = (arrMsg) => {
    let message = arrMsg[randomNum(arrMsg)]
    setShowMessage(message)
    }

    const cellElements = cells.map(cell => (
        <Cells 
            key={cell.id}
            handleClick={()=>handleClick(cell.id)}          
            value={cell.value}
            id={cell.id}
        />
    ))

    const AI = () => {
    if (arrInputX.current.length > 0) {
        console.log('im an ai')
    }
    }

    const logout = () => {
        navigate('/login')
        Meteor.logout() }
    
    return (
        <Fragment>
            <div className="cellbox">
                {cellElements}
                </div>
                    <p className='message'>{showMessage}</p>
                    <div className="playersbutton">
                        <div className='button-area'>                    
                            <button onClick={startGame} id="startbutton">START</button>
                            <button onClick={resetGame} id="resetbutton">RESET</button>
                            <button onClick={logout} id="logoutbutton">LOGOUT</button>
                {/* EXPERIMENTAL FEAUTURES WILL BE DEVELOP LATER */}
                            {/* <button id="humanbutton">VS HUMAN</button>
                            <button id="aibutton" >VS AI</button> */}
                </div>
            </div>
        </Fragment>
    )
}