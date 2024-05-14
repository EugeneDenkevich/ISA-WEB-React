import React from "react"
import "./MiniApp.css"

const MiniApp = (props) => {
    // TODO Сделать этот компонет как контейнер из дизайна
    return (
        <div className="mini-app">
            <h3 className="name">{props.name}</h3>
            <h4 className="descriptiont">{props.description}</h4>
            <p className="author">{props.author}</p>
        </div>
    )
}

export default MiniApp