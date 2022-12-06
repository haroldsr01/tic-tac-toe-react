import React, {useState} from 'react';

export const Board = () => {  
    let [cell, setCell] = useState()
    const handleClick = (e) => {
        if (e.target.textContent === "") {
            e.target.textContent = "X"
        } else {
            e.target.textContent = "O"
        }
    }
    const startGame = () => {
       
    }

    const resetGame = () => {
        setCell(cell = "" )      
    }

    return (
        <div>
            <div className='gametext'>Play against computer!</div>
            <div className='board'>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
                <div className='board--box' onClick={handleClick}>{cell}</div>
            </div>
                <div className="playersbutton">
                    <div className='button'>
                        <div className='player1'>HUMAN</div>
                            <button onClick={startGame}>START</button>
                            <button onClick={resetGame}>RESET</button>
                        <div className='player2'>COMPUTER</div> 
                    </div>
                </div>
        </div>
    )
}