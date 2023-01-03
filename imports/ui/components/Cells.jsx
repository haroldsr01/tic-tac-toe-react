import React from 'react'

export const Cells = (props) => {
    return (
        <div className="cells" onClick={props.handleClick} id={props.id}>{props.value}</div>
    )
}