import './App.css';

import MainSearchBar from './components/MainSearchBar';
import MenuButton from './components/MenuButton'

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
    </div>
  );
}

export default App;
