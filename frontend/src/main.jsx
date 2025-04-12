import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import pages

import Homepage from './Screens/Home/index.jsx';
import Trending from './Screens/Trending/index.jsx';
import Foryou from './Screens/ForYou/index.jsx';
import OnSale from './Screens/OnSale/index.jsx';
import NewArrivals from './Screens/NewArrivals/index.jsx';
import Recommended from './Screens/Recommended/index.jsx';
import Genre from './Screens/Genre/index.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/foryou' element={<Foryou />} />
        <Route path='/onsale' element={<OnSale />} />
        <Route path='/newarrivals' element={<NewArrivals />} />
        <Route path='/recommended' element={<Recommended />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);