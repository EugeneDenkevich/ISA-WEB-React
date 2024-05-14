import React from "react"
import Header from "./components/Header/Header"
import MiniAppBlock from "./components/MiniAppBlock/MiniAppBlock"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MiniAppBlock />
            </div>
        )
    }
}
