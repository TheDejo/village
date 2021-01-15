import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './nav/Navbar';
import Home from  './pages/Home';
import Politics from  './pages/Politics';
import Sports from  './pages/Sports';
import Button1 from './Button1';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/politics" exact component={Politics} />
      <Route path="/sports" exact component={Sports} />
      </BrowserRouter>
    </div>
  );
};

export default App;