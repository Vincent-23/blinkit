import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Layout from './components/Layout';
import { MyContext } from './context/MyContext';
import './App.css';

function App() {

  return (
    <div className="App">
      <MyContext.Provider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
