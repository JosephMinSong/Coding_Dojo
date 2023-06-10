import styles from "./App.module.css"
import { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)
  const tabContent = ["This is some text 1", "This is some text 2", "This is some text 3"]

  const changeTabs = (i) => {
    setIndex(i)
  }


  return (
    <div className={styles.App}>

      <div className={ styles.tabRow }>
        
        { tabContent.map( (_ , index ) => <button key={ index } onClick={ () => changeTabs(index) }> Tab { index + 1 } </button> ) }

      </div>

      <div className={ styles.content }>
        { tabContent[index] }
      </div>

    </div>
  )
}

export default App;
