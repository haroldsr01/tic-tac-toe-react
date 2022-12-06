import React from 'react';

export const Board = () => {
    return (
        <div className='board'>
            <div className='board--box' onClick={(e)=> console.log(e.target.textContent = "Nice")}>1</div>
            <div className='board--box'>2</div>
            <div className='board--box'>3</div>
            <div className='board--box'>4</div>
            <div className='board--box'>5</div>
            <div className='board--box'>6</div>
            <div className='board--box'>7</div>
            <div className='board--box'>8</div>
            <div className='board--box'>9</div>
        </div>
    )
}