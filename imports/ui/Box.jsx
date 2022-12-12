import React from "react"

export const Box = (props) => {
    const [on, setOn] = React.useState(props.on)
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    const toggle = () => {
        setOn(prevOn => !prevOn)
    }
    
    
    return (
        <div style={styles} className="box" onClick={toggle} ></div>
    )
}