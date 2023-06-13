import styles from "./App.module.css"
import { useState } from 'react'

function App() {

  const [attempts, setAttempts] = useState("")

  const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails"
  }

  const fiveHeads = new Promise ( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5){
        attempts ++

        // if (attempts > 100){
        //   reject("It took more than 100 times");
        // }

        let result = tossCoin()
        if (result === "heads"){
          headsCount ++
        } else {
          headsCount = 0
        }
    }
    resolve(`It took ${attempts} tries`);
  })

  const fiveHeadsFunction = () => {
    fiveHeads
    .then(data => setAttempts(data))
  }

  return (
    <div className="App">
      <button onClick={ fiveHeadsFunction }>Click me to see how many tries it takes to get heads 5 times in a row</button>
      <p> { attempts } </p>
    </div>
  );
}

export default App;
