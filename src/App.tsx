import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {
  Header,
  Aside
} from './components'
import {
  Home,
  Test
} from './routers'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Aside/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
