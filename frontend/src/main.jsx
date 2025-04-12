import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import pages

import Homepage from './Screens/Home/index.jsx';
import Trending from './Screens/Trending/index.jsx';
import Foryou from './Screens/ForYou/index.jsx';
import OnSale from './Screens/OnSale/index.jsx';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/foryou' element={<Foryou />} />
        <Route path='/onsale' element={<OnSale />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);