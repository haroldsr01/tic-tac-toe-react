import React from 'react'

export const Cells = (props) => {
console.log("test@Cells.jsx")
    return (
        <div className="cells" onClick={props.handleClick} id={props.id}>{props.value}</div>
    )


}