import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Fooder from './pages/Fooder';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>
      <Fooder/>
     
    </React.Fragment>
  );
}

export default App;
