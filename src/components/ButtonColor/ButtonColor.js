import React from "react"
import "./ButtonColor.css"

const ButtonColor = (props) => {
    return (
        <button className="buttonColor">{props.text}</button>
    )
}

export default ButtonColor