import React, {useState} from 'react';

export const Board = () => {  
// set initial state of player1
    const human = "X"
    const computer = "O"
    let isAlive = false;
    let isPlayerTurn = false;
    const msgWinner = ['You Win', "Congratulations!!!","You've got some skills","Impossible, you beat me!"]   
    const msgLosser = ['You Lose', 'AI will conquer the world', 'Better Luck Next Time', 'Practice More Human']
    const maxInputX = 5;
    const maxInputO = 4;
    const winXCombination =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const arrInputX = []
    const AI = () => {
        let arrMatch = [] 
        let arrMatchIndex = []       
        for (let i = 0; i<winXCombination.length; i++ ){
            for (let j = 0; j<winXCombination[i].length; j++){
                for (let h = 0; h<arrInputX.length; h++) {
                     if(Number(arrInputX[h]) === winXCombination[i][j] ){           
                        if (!arrMatchIndex.includes(i)) {
                            arrMatchIndex.push(i)
                            arrMatch.push(winXCombination[i])
                        }                        
                    }           
                }
            }
        }
        for (let l=0; l<arrMatch.length; l++){
            for (let k = 0; k<arrMatch[l].length; k++){
                for (let m=0; m<arrInputX.length; m++) {
                    if (Number(arrInputX[m]) === arrMatch[l][k]) {
                        if (Number(arrInputX[m]) === 1 ){
                            console.log(arrInputX[m])

                        }
                        // console.log(arrMatchIndex)

                        // console.log(arrMatch)
                        // console.log(arrMatch.length)
                        // console.log(arrMatch[0].length)
                    }
                }
            }
        }
    }
    const handleClick = (e) => {       
        let i = e.target.id[5]        
        arrInputX.push(i)                 
        AI()
    }

    const startGame = () => {
       isAlive = true; 
       isPlayerTurn = true;       
       console.log(arrInputX)       
       console.log(isAlive)
       console.log(isPlayerTurn)
    }
    
    const resetGame = () => {
        isAlive = false;
        isPlayerTurn = false;     
        console.log(isAlive)
        console.log(isPlayerTurn)
    }

    return (
        <div>
            {/* <div className='gametext'>Play against computer!</div> */}
            <div className='board'>
                <div className='board--box' onClick={handleClick} id="cell-0">0</div>
                <div className='board--box' onClick={handleClick} id="cell-1">1</div>
                <div className='board--box' onClick={handleClick} id="cell-2">2</div>
                <div className='board--box' onClick={handleClick} id="cell-3">3</div>
                <div className='board--box' onClick={handleClick} id="cell-4">4</div>
                <div className='board--box' onClick={handleClick} id="cell-5">5</div>
                <div className='board--box' onClick={handleClick} id="cell-6">6</div>
                <div className='board--box' onClick={handleClick} id="cell-7">7</div>
                <div className='board--box' onClick={handleClick} id="cell-8">8</div>                
            </div>
            <div className="playersbutton">
                <div className='button'>
                    <div className='player1'>HUMAN</div>
                        <button onClick={startGame} id="startbutton">START</button>
                        <button onClick={resetGame} id="resetbutton">RESET</button>
                    <div className='player2'>COMPUTER</div> 
                </div>
            </div>
        </div>
    )
}