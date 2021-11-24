import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';

import NotFound from './pages/NotFound';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/new" element={<News />} />
            <Route element={<NotFound />} />
         </Routes>
      </>
   );
};

export default App;
