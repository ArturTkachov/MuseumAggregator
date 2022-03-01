import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { CollectionType } from './types/CollectionType';

const Collections = React.lazy(() => import('./pages/Collections'));
const CollectionPage = React.lazy(() => import('./pages/CollectionPage'));
const Favourites = React.lazy(() => import('./pages/Favourites'));
const ArtworkPageProxy = React.lazy(() => import('./pages/ArtworkPageProxy'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="MuseumAggregator"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="collections"
            element={
              <React.Suspense fallback={<>...</>}>
                <Collections />
              </React.Suspense>
            }
          />
          <Route
            path="collections/antiquity"
            element={
              <React.Suspense fallback={<>...</>}>
                <CollectionPage collection={CollectionType.Antiquity} />
              </React.Suspense>
            }
          />
          <Route
            path="collections/asia"
            element={
              <React.Suspense fallback={<>...</>}>
                <CollectionPage collection={CollectionType.Asia} />
              </React.Suspense>
            }
          />
          <Route
            path="collections/middle-ages"
            element={
              <React.Suspense fallback={<>...</>}>
                <CollectionPage collection={CollectionType.MiddleAges} />
              </React.Suspense>
            }
          />
          <Route
            path=":source/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <ArtworkPageProxy />
              </React.Suspense>
            }
          />
          <Route path="random" element={<p>Random</p>} />
          <Route
            path="favourites"
            element={
              <React.Suspense fallback={<>...</>}>
                <Favourites />
              </React.Suspense>
            }
          />
          <Route path="attribution" element={<p>Attribution</p>} />
          <Route
            path="search/:query"
            element={
              <React.Suspense fallback={<>...</>}>
                <SearchPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<p>Not found</p>} />
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
