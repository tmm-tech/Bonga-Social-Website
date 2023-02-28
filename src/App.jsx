import React from 'react';
import './App.css';
import Friends from './pages/Friends';
import Notification from './pages/Notification';
import { Routes, Route } from 'react-router-dom';
import Videos from './pages/Videos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Friends/>} ></Route>
        <Route path='/notification' element={<Notification/>} ></Route>
        <Route path='/videos' element={<Videos/ >} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
