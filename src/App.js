import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Welcome from './views/Welcome';
import Home from './views/Home';

const App = () => {
  return <div>
    <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  </div>
};

export default App;
