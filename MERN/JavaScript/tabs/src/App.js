import styles from "./App.module.css"
import { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)
  const tabContent = ["This is some text 1", "This is some text 2", "This is some text 3"]

  const changeTabs = (i) => {
    setIndex(i)
    addAnimation(i)
  }

  const addAnimation = (i) => {
    const target = document.getElementById(i)

    const spinAnimation = {
      transform: "rotate(0) scale(1)",
      transform: "rotate(360deg) scale(0)"
    }

    target.style=spinAnimation
  }

  return (
    <div className={styles.App}>

      <div className={ styles.tabRow }>
        
        { tabContent.map( (_ , index) => <button key={ index } onClick={ () => changeTabs(index) }> Tab { index + 1 } </button> ) }

      </div>

      <div className={ styles.content }>

        { tabContent.map( (content, i) => { if (i == index) return <p  id={ i } className={ styles.contentStyle }> { content } </p> } ) }

      </div>

    </div>
  )
}

export default App;
