import styles from "./App.module.css"
import { Routes, Route, Link } from 'react-router-dom'
import Main from "./Views/Main"
import Game from "./Views/Game"
import { useState, useEffect } from "react"

export default function App() {

    const [homeActive, setHomeActive] = useState('list')

    const bold = {
        fontWeight: 800
    }

    return (
        <div className={ styles.app }>
            <div className={ styles.navbar }>
                <Link to={`/players/list`} className={ styles.navbar_link } style={ homeActive == 'list' ? bold : null }>Manage Players</Link>
                <h1>|</h1>
                <Link to={'/status/game/1'} className={ styles.navbar_link } style={ homeActive == 'game' ? bold : null }>Manage Player Status</Link>
            </div>
            <Routes>
                <Route path='/players/:page' element={ <Main setHomeActive={ setHomeActive } boldStyle={ bold }/> }/>
                <Route path='/status/game/:id' element={ <Game setHomeActive={ setHomeActive } /> } />
            </Routes>
        </div>
    )
}