import styles from "../App.module.css"
import { useState, useEffect } from "react"

export default function Game({ setHomeActive }) {

    useEffect( () => {
        setHomeActive('game')
    }, [] )

    return (
        <>
        
        </>
    )
}