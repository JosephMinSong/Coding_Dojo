import styles from "../App.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export default function Main({ setHomeActive, boldStyle }) {

    const initialValues = {
        name: '',
        prefPosition: ''
    }

    const [mainActive, setMainActive] = useState('list')
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState({...initialValues})

    const { page } = useParams()
    const navigate = useNavigate()

    const getAllPlayers = () => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }

    useEffect( () => {
        setHomeActive('list')
        getAllPlayers()
    }, [] )

    const handleClick = nav => {
        setMainActive(nav)
        navigate(`/players/${nav}`)
    }

    const handleChange = (e) => {
        const name = e.target.name

        setPlayer(current => ({ ...current, [name] : e.target.value }))
    }

    const buttonStyleActive = {
        backgroundColor : 'green',
        color : 'white'
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/players', player)
            .then(res => {
                navigate('/players/list')
                setPlayers(current => [...current, res.data])
                setMainActive('list')
                setPlayer({ ...initialValues })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={ styles.main }>
            <div className={ styles.main_navbar }>
                <p onClick={ () => handleClick('list') } className={ styles.main_navbar_links } style={ mainActive === 'list' ? boldStyle : null }>List</p>
                <p className={ styles.main_navbar_links }>|</p>
                <p onClick={ () => handleClick('addplayer') } className={ styles.main_navbar_links } style={ mainActive === 'addplayer' ? boldStyle : null }>Add Player</p>
            </div>

            {page === 'list' ?
            <table className={ styles.player_table }>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players && players.map(player => {
                        return <tr key={ player._id }>
                            <td>{ player.name }</td>
                            <td>{ player.prefPosition }</td>
                            <td>Delete</td>
                        </tr>
                    })}
                </tbody>
            </table>
            :
            <form className={ styles.player_form } onSubmit={ handleSubmit }>
                <h2>Add Player</h2>

                <label htmlFor="name">Player Name:</label>
                <input type="text" id='name' value={ player.name } onChange={ handleChange } name='name'/>

                <label htmlFor="prefPosition">Preferred Position:</label>
                <input type="text" id='prefPosition' value={ player.prefPosition } onChange={ handleChange } name='prefPosition'/>

                <button 
                disabled={ player.name.length > 2 ? false : true } 
                className={ styles.player_form_button }
                style={ player.name.length > 2 ? buttonStyleActive : null }
                >Save
                </button>

            </form>
            }
        </div>
    )
}