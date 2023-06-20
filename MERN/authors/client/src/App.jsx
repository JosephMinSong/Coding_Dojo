import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom'
import Main from "./Views/Main"
import Edit from "./Views/Edit"
import New from "./Views/New"

export default function App(){
    return (
        <div className={ styles.app }>
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/authors/new' element={ <New />} />
                <Route path='/authors/:id/edit' element={ <Edit />} />
            </Routes>
        </div>
    )
}