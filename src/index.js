import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import {CollectionType} from './types/CollectionType';

const Collections = React.lazy(() => import('./pages/Collections'));
const CollectionPage = React.lazy(() => import('./pages/CollectionPage'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="MuseumAggregator" element={
          <Provider store={store}>
            <App/>
          </Provider>
        }>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="collections" element={
            <React.Suspense fallback={<>...</>}>
              <Collections/>
            </React.Suspense>
          }/>
          <Route path="collections/asia" element={
            <React.Suspense fallback={<>...</>}>
              <CollectionPage collection={CollectionType.Asia}/>
            </React.Suspense>
          }/>
          <Route path="random" element={<p>Random</p>}/>
          <Route path="favourites" element={<p>Favourites</p>}/>
          <Route path="attribution" element={<p>Attribution</p>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('app-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
