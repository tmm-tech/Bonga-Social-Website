import React from 'react';
import './App.css';
import Friends from './pages/Friends';
import Notification from './pages/Notification';
import { Routes, Route } from 'react-router-dom';
import Videos from './pages/Videos';
import Oldfriends from './components/Oldfriends';
import Request from './components/Request';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Friends/>} >
          <Route path='' element={<Oldfriends/>}/>
          <Route path='oldfriends' element={<Oldfriends/>}/>
          <Route path='request' element={<Request/>}/>
        </Route>
        <Route path='/notification' element={<Notification/>} ></Route>
        <Route path='/videos' element={<Videos/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
