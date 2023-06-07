import styles from "./App.module.css"

function App() {
  return (
    <div className = {styles.app}>
    <Header />
    <Navigation />
    <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
    </Main>
</div>
  )
}

export default App;
