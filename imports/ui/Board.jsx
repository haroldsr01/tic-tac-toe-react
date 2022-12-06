import React from 'react';

export const Board = () => {
    const handleClick = (e) => {
        if (e.target.textContent === "") {
            e.target.textContent = "X"
        } else {
            e.target.textContent = "O"
        }
    }

    return (
        <div className='board'>
            <div className='board--box' onClick={handleClick}>1</div>
            <div className='board--box' onClick={handleClick}>2</div>
            <div className='board--box' onClick={handleClick}>3</div>
            <div className='board--box' onClick={handleClick}>4</div>
            <div className='board--box' onClick={handleClick}>5</div>
            <div className='board--box' onClick={handleClick}>6</div>
            <div className='board--box' onClick={handleClick}>7</div>
            <div className='board--box' onClick={handleClick}>8</div>
            <div className='board--box' onClick={handleClick}>9</div>
        </div>
    )
}