import React from "react"
import ButtonColor from "../ButtonColor/ButtonColor"
import Button from "../Button/Button"
import "./Menu.css"

const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu">
                <ButtonColor text="Админ" />
                <ButtonColor text="Добавить" />
            </div>
            <div className="menu">
                <Button text="Новости" />
                <Button text="Помощь" />
            </div>
        </div>
    )
}

export default Menu