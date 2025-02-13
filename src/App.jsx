import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Count from './components/Count';
import Theme from './components/Theme';
import BgColor from './components/BgColor';
import OnlineStatus from './components/OnlineStatus';
import TextResizer from './components/TextResizer';
import BatteryCounter from './components/BatteryCounter';
import Navbar from './nav/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/count' element={<Count />} />
        <Route path='/theme' element={<Theme />} />
        <Route path='/bgcolor' element={<BgColor />} />
        <Route path='/onlinestatus' element={<OnlineStatus />} />
        <Route path='/textresizer' element={<TextResizer />} />
        <Route path='/battery' element={<BatteryCounter />} />
      </Routes>
    </>
  );
}

export default App