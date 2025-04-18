import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginContext } from "/src/loginContext.jsx";
import { useState } from "react";

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
import Contacts from './User/Contacts/index.jsx';

const App = () => {
  // Get data from local storage
  const Shopingcart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(Shopingcart || []);
  return (
    <LoginContext.Provider value={{
      cart,setCart
    }}>
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
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);