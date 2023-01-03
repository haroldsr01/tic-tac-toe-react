import React from 'react';

export const Button = () => {
    const startGame = () => {
    }
    const resetGame = () => {
    }

    return (
        <div className="playersbutton">
            <div className='button'>
                <div className='player1'>HUMAN</div>
                    <button onClick={startGame}>START</button>
                    <button onClick={resetGame}>RESET</button>
                <div className='player2'>COMPUTER</div> 
            </div>
        </div>
    )
}