import React,{useState} from 'react';

export const Board = () => {  
// set initial state of player1
    const playerX = "X"
    const playerO = "O"
    let isAlive = false;
    let currentPlayer = playerX
    const msgWinner = ['You Win', "Congratulations!!!","You've got some skills","Impossible, you beat me!"]   
    const msgLosser = ['You Lose', 'AI will conquer the world', 'Better Luck Next Time', 'Practice More Human']
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
    const arrInputO = []
    // const AI = () => {
    //     let random = Math.floor(Math.random()*9)
    //     for (let i = 0; i<9; i++){
    //         if (arrInputX.includes(random)){break}            
    //     }
    //     // let arrMatch = [] 
    //     // let arrMatchIndex = []       
    //     // for (let i = 0; i<winXCombination.length; i++ ){
    //     //     for (let j = 0; j<winXCombination[i].length; j++){
    //     //         for (let h = 0; h<arrInputX.length; h++) {
    //     //              if(arrInputX[h] === winXCombination[i][j] ){           
    //     //                 if (!arrMatchIndex.includes(i)) {
    //     //                     arrMatchIndex.push(i)
    //     //                     arrMatch.push(winXCombination[i])                            
    //     //                 }                        
    //     //             }           
    //     //         }
    //     //     }
    //     // }
    //     //     console.log(arrMatch)
    //     //     console.log(arrMatchIndex)
    //     //     console.log(arrInputX)      
    // }
    const handleClick = (e) => {        
        if(currentPlayer === playerX && isAlive === true) {
        let i = Number(e.target.id[5])              
        if(!arrInputX.includes(i)){
            arrInputX.push(Number(i))           
            e.target.textContent = "X"      
            // AI()
            chkCombi(winXCombination,arrInputX)
            switchTurn()
        }      
    } else if (isAlive === true){
        let i = Number(e.target.id[5])              
        if(!arrInputO.includes(i)){
            arrInputO.push(Number(i))           
            e.target.textContent = "O"      
            // AI()            
            chkCombi(winXCombination,arrInputO)
            switchTurn()
    }
}

}
    const randomNum = (array) => {
        return Math.floor(Math.random()*array.length)
    }
    const chkCombi = (arrWin,playerInput) =>{
        for (let i=0; i<arrWin.length; i++){
            if (arrWin[i].every(el => playerInput.includes(el))){      
                isAlive = false;          
                console.log(msgWinner[randomNum(msgWinner)]+currentPlayer)
            } 
        }
    }    

    const switchTurn = () => {
       if (currentPlayer === playerX){
        currentPlayer = playerO        
       } else {
        currentPlayer = playerX        
       }
    }  
    // const [cell, setCell]  = useState()
    const startGame = () => {
       isAlive = true; 
       arrInputX.length = 0;
       arrInputO.length = 0;    
    //    setCell("")
    //    console.log(cell)
    }
    
    const resetGame = () => {
        startGame();       
    }

    return (
        <div>
            <div className='gametext'>Play against computer!</div>
            <div className='board'>
                <div className='board--box' onClick={handleClick} id="cell-0"></div>
                <div className='board--box' onClick={handleClick} id="cell-1"></div>
                <div className='board--box' onClick={handleClick} id="cell-2"></div>
                <div className='board--box' onClick={handleClick} id="cell-3"></div>
                <div className='board--box' onClick={handleClick} id="cell-4"></div>
                <div className='board--box' onClick={handleClick} id="cell-5"></div>
                <div className='board--box' onClick={handleClick} id="cell-6"></div>
                <div className='board--box' onClick={handleClick} id="cell-7"></div>
                <div className='board--box' onClick={handleClick} id="cell-8"></div>                
            </div>
            <div className="playersbutton">
                <div className='button'>
                    <div className='player1'></div>                        
                        <button onClick={startGame} id="startbutton">START</button>
                        <button onClick={resetGame} id="resetbutton">RESET</button>
                    <div className='player2'></div> 
                </div>
            </div>
        </div>
    )
}