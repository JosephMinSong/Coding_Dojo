import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'

import Room1 from './Views/Room1'

export default function App() {

    return (
        <div className={ styles.app }>
            <Routes>
                <Route path='/:id' element={ <Room1 /> } />
            </Routes>
        </div>
    )
}