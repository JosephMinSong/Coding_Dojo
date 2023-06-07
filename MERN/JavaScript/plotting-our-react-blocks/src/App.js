import styles from './App.module.css';
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Nav.js';
import Main from './components/Main/Main.js';
import SubContents from './components/SubContents/SubContents.js';
import Advertisement from './components/Advertisement/Advertisement.js';

                
function App() {
  return (
    <div className={ styles.app }>
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;