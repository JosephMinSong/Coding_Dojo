import { Routes, Route } from "react-router-dom"
import Hello from "./Components/Hello"
import Home from "./Components/Home"
import Number from "./Components/Number"
import HelloColor from "./Components/HelloColor"
import styles from "./App.module.css"

export default function App() {
    return (
        <div className={ styles.app }>
            <h1> Routing Practice </h1>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/hello" element={<Hello /> } />
                <Route path="/:number" element={<Number /> } />
                <Route path="/hello/:color1/:color2" element={<HelloColor /> } />
            </Routes>
        </div>
    )
}