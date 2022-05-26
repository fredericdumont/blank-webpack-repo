import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Firstpage from './components/Firstpage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/firstpage" element={<Firstpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
