import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {
  Header,
  Aside
} from './components'
import {
  Home,
  People,
  NotPage,
  Schedule
} from './routers'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Aside/>
        <div className='pt-[110px] px-[50px] pb-[50px] w-[100%] max-w-[1920px]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/people/:id' element={<People/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='*' element={<NotPage/>}/>
          </Routes>
        </div>
        
    </BrowserRouter>
  );
}

export default App;
