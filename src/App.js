// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';
import Wrapper from './components/Wrapper/Wrapper';

import './styles/root.css';
import './styles/main.css';

// const Wrapper = lazy(() => import('./components/Wrapper/Wrapper'));
// const Home = lazy(() => import('./pages/Home'));
// const Catalog = lazy(() => import('./pages/Catalog'));
// const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/tech-project/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<Navigate raplce to="/tech-project" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
