// import SharedLayout from "./SharedLayout";
// const Trending = lazy(() => import("../pages/Trending"));
// const SearchMovie = lazy(() => import("../pages/Searchmovies"));
// const Details = lazy(() => import("../pages/Moviedetails"));
// const Credits = lazy(() => import("../pages/Moviecredits"));
// const Reviews = lazy(() => import("../pages/Moviereviews "));

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
//           <Route index element={<Trending />} />
//           <Route path="movies" element={<SearchMovie />} />
//           <Route path="movies/:id" element={<Details />}>
//             <Route path="credits" element={<Credits />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// };

import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { lazy, useState } from "react";

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Wrapper from './components/Wrapper/Wrapper';
import Buy from './pages/Buy';

import './styles/main.css';
import './styles/root.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-parfume/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          {/* <Route path="catalog:id" element={<Catalog />} /> */}
          <Route path="buy" element={<Buy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
