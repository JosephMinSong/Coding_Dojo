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
        <div className={ styles.bottom }>
          <Navigation />
          <Main>
            <div className={ styles.subcontents }>
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;