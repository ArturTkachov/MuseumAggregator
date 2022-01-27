import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/main/home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="MuseumAggregator" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="collections" element={<p>Collections</p>}/>
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
