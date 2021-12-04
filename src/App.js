import './App.css';

import MainSearchBar from './components/header/MainSearchBar';
import MenuButton from './components/header/MenuButton'

function App() {
  return (
    <div id="wrapper">
      <header>
        <span id="name">Nomen</span>
        <div id="right-panel">
          <MainSearchBar/>
          <MenuButton/>
        </div>
      </header>
      <main>
        <p>Test</p>
      </main>
    </div>
  );
}

export default App;
