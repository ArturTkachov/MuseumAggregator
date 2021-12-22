import './App.css';

import MainSearchBar from './components/header/MainSearchBar';
import MenuButton from './components/header/MenuButton'
import PageDescription from './components/main/PageDescription';

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
        <PageDescription heading="Explore the world of art">
          <>
          Nomen is a website wich helps you learn a bit more about diverse<br/>
          cultures of humanity by providing a simple way of browsing pieces of art<br/>
          from all around the world.
          </>
        </PageDescription>
      </main>
    </div>
  );
}

export default App;
