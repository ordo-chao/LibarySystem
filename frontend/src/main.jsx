import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import pages

import Homepage from './User/Home/index.jsx';
import Trending from './User/Trending/index.jsx';
import Foryou from './User/ForYou/index.jsx';
import OnSale from './User/OnSale/index.jsx';
import NewArrivals from './User/NewArrivals/index.jsx';
import Recommended from './User/Recommended/index.jsx';
import Genre from './User/Genre/index.jsx';
import Search from './User/Search/index.jsx';
import About from './User/About/index.jsx';
import Order from './User/Order/index.jsx';
import Profile from './User/Profile/index.jsx';

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
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);