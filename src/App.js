import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import { MyContext } from './context/MyContext';
import './App.css';
import Products from './pages/products';

function App() {

  const [ cart, setCart ] = useState([]);

  return (
    <div className="App">
      <MyContext.Provider value={{ cart, setCart }}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
