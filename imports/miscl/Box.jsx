import React from "react"

export const Box = (props) => {
    // const [on, setOn] = React.useState()    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    // const toggle = () => {
    //     setOn(prevOn => !prevOn)
    // }
    // console.log(React.useState())
    
    return (
        <div style={styles} className="box" onClick={props.toggle}></div>
    )
}