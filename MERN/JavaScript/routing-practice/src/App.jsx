import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import HelloColor from "./Components/HelloColor"
import styles from "./App.module.css"

export default function App() {
    return (
        <div className={ styles.app }>
            <h1> Routing Practice </h1>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/:variable" element={<HelloColor /> } />
                <Route path="/:variable/:color1/:color2" element={<HelloColor /> } />
            </Routes>
        </div>
    )
}